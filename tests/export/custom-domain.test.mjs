import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Exercise the generated artifact, not the source configuration: Pages serves
// out/ at the custom domain root. A stale basePath must fail before deployment.
test("custom-domain pages reference assets and navigation present in the export", () => {
  for (const page of ["index.html", "about/index.html"]) {
    const html = readFileSync(join("out", page), "utf8");
    const paths = [...html.matchAll(/(?:src|href)="(\/[^"#]*)"/g)]
      .map((match) => match[1]);
    assert.ok(paths.some((path) => path.endsWith(".css")), `${page}: missing stylesheet`);
    assert.ok(paths.some((path) => path.endsWith(".js")), `${page}: missing scripts`);
    for (const path of new Set(paths)) {
      const pathname = new URL(path, "https://nccufintechlab.tw").pathname;
      const file = join("out", pathname, pathname.endsWith("/") ? "index.html" : "");
      assert.ok(existsSync(file), `${page}: ${pathname} is not served at the domain root`);
    }
  }
});
