// CI uses the committed content snapshot without Supabase credentials.
// Restore its publicly served images before building the static export.
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { collectImagePaths } from "./lib/rows-to-snapshot.ts";
import type { Snapshot } from "../src/lib/content.schema.ts";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));

export async function syncPublicMedia({ snapshot, publicRoot, origin }: {
  snapshot: Snapshot;
  publicRoot: string;
  origin: string;
}): Promise<number> {
  let restored = 0;
  for (const mediaPath of collectImagePaths(snapshot)) {
    if (!/^\/media\/[A-Za-z0-9._/-]+$/.test(mediaPath)) {
      throw new Error(`Invalid public media path: ${mediaPath}`);
    }
    const target = resolve(publicRoot, `.${mediaPath}`);
    const rel = relative(publicRoot, target);
    if (rel === ".." || rel.startsWith(`..${sep}`)) {
      throw new Error(`Public media path escapes destination: ${mediaPath}`);
    }
    if (existsSync(target) && statSync(target).size > 0) continue;

    const response = await fetch(new URL(mediaPath, origin), { redirect: "error" });
    if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
      throw new Error(`Could not restore public image ${mediaPath}: HTTP ${response.status}`);
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length === 0) throw new Error(`Empty public image: ${mediaPath}`);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, bytes);
    restored += 1;
  }
  return restored;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const snapshot = JSON.parse(readFileSync(resolve(projectRoot, "src/lib/content.snapshot.json"), "utf8"));
  const restored = await syncPublicMedia({
    snapshot,
    publicRoot: resolve(projectRoot, "public"),
    origin: "https://nccufintechlab.tw",
  });
  console.log(`Restored ${restored} missing public media image(s)`);
}
