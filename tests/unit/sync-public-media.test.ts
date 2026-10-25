import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { syncPublicMedia } from "../../scripts/sync-public-media.ts";

test("restores only missing snapshot media from the public site", async () => {
  const root = mkdtempSync(join(tmpdir(), "ftl-ci-media-"));
  const existing = join(root, "media/partners/existing.png");
  mkdirSync(join(root, "media/partners"), { recursive: true });
  writeFileSync(existing, "existing");
  const requests: string[] = [];
  const server = createServer((request, response) => {
    requests.push(request.url ?? "");
    response.writeHead(200, { "Content-Type": "image/png" });
    response.end("new image");
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  try {
    const address = server.address();
    assert.ok(address && typeof address !== "string");
    const snapshot = { partners: [
      { logo: "/media/partners/existing.png" },
      { logo: "/media/partners/new.png" },
    ], books: [], projectDecks: [], articles: [] };
    await syncPublicMedia({ snapshot: snapshot as unknown as Parameters<typeof syncPublicMedia>[0]["snapshot"], publicRoot: root, origin: `http://127.0.0.1:${address.port}` });
    assert.deepEqual(requests, ["/media/partners/new.png"]);
    assert.equal(readFileSync(existing, "utf8"), "existing");
    assert.equal(readFileSync(join(root, "media/partners/new.png"), "utf8"), "new image");
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
    rmSync(root, { recursive: true, force: true });
  }
});

test("rejects media paths that try to escape the public directory", async () => {
  const root = mkdtempSync(join(tmpdir(), "ftl-ci-media-path-"));
  try {
    const snapshot = { partners: [{ logo: "/media/../../outside.png" }], books: [], projectDecks: [], articles: [] };
    await assert.rejects(
      syncPublicMedia({ snapshot: snapshot as unknown as Parameters<typeof syncPublicMedia>[0]["snapshot"], publicRoot: root, origin: "https://nccufintechlab.tw" }),
      /escapes destination/,
    );
    assert.equal(existsSync(join(root, "outside.png")), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
