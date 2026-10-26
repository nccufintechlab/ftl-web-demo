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

test("social previews use the live domain and a bundled image", () => {
  for (const page of ["index.html", "events/index.html"]) {
    const html = readFileSync(join("out", page), "utf8");
    for (const key of ["og:image", "twitter:image"]) {
      const tag = [...html.matchAll(/<meta\s[^>]*>/g)]
        .map(([tag]) => tag)
        .find((tag) => tag.includes(`="${key}"`));
      assert.ok(tag, `${page}: missing ${key}`);
      const imageUrl = /content="([^"]+)"/.exec(tag)?.[1];
      assert.equal(imageUrl, "https://nccufintechlab.tw/assets/og.png", `${page}: ${key}`);
      assert.ok(existsSync(join("out", new URL(imageUrl).pathname)));
    }
  }
  const sitemap = readFileSync("out/sitemap.xml", "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));
  assert.ok(urls.length > 0);
  assert.ok(urls.every((url) => url.origin === "https://nccufintechlab.tw"));
});

// Check the deployed artifact so edits to an unused root robots.txt cannot pass.
test("published robots allows crawling and points to the exported sitemap", () => {
  const robots = readFileSync("out/robots.txt", "utf8");
  assert.match(robots, /^User-agent: \*$/im);
  assert.match(robots, /^Allow: \/$/im);
  assert.doesNotMatch(robots, /^Disallow: \/\s*$/im);
  const sitemap = /^Sitemap: (.+)$/im.exec(robots)?.[1].trim();
  assert.equal(sitemap, "https://nccufintechlab.tw/sitemap.xml");
  assert.ok(existsSync(join("out", new URL(sitemap).pathname)));
});

// Crawling permission in robots.txt alone is insufficient: HTML must allow indexing.
test("public pages allow indexing while admin pages remain excluded", () => {
  const publicPages = ["", "about", "projects", "insights", "resources", "events", "contact", "privacy"];
  const adminPages = ["admin", "admin/admins", "admin/articles", "admin/events", "admin/partners", "admin/projects", "admin/resources", "admin/settings", "admin/trash", "admin/weekly"];
  for (const [pages, expected] of [[publicPages, ["index", "follow"]], [adminPages, ["noindex", "nofollow"]]]) {
    for (const page of pages) {
      const html = readFileSync(join("out", page, "index.html"), "utf8");
      const tags = [...html.matchAll(/<meta\s[^>]*>/g)].map(([tag]) => tag);
      const robots = tags.filter((tag) => /name="(?:robots|googlebot)"/i.test(tag));
      assert.ok(robots.length > 0, `${page || "/"}: missing indexing directive`);
      for (const tag of robots) {
        const directives = /content="([^"]*)"/.exec(tag)?.[1].toLowerCase().split(/\s*,\s*/);
        assert.deepEqual(directives, expected, `${page || "/"}: wrong indexing directive`);
      }
    }
  }
});
