import { SITE } from "@/lib/site";
import { MODS, type KeySpec } from "@/lib/shortcuts";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

function keys(spec: KeySpec) {
  return Array.isArray(spec) ? spec.join(" ") : spec;
}

export function GET() {
  const posts = getAllPosts();

  const body = `# ${SITE.name} — Windows to Mac shortcut translation

> ${SITE.description}

Site: ${SITE.url}
Author: ${SITE.author.name} (${SITE.author.url})
Open source (MIT): ${SITE.repo}
Verified against ${SITE.macOS}.

## The core idea

Almost every Windows shortcut works on a Mac. You press Command (Cmd) where you used to press Ctrl, and most of your muscle memory comes straight back.

## The three modifier-key swaps

${MODS.map((m) => `- ${m.win} becomes ${keys(m.mac)} (${m.name}). ${m.body}`).join("\n")}

## Key pages

- ${SITE.url}/ — the full shortcut cheat sheet (every Windows shortcut next to its Mac equivalent) plus everyday how-to guides
- ${SITE.url}/blog — short articles for people switching from Windows
- ${SITE.url}/videos — curated video walkthroughs
- ${SITE.url}/about — why this exists

## Articles

${posts.map((p) => `- ${p.title}\n  ${SITE.url}/blog/${p.slug}\n  ${p.excerpt}`).join("\n")}

## Full content

Complete shortcut tables, everyday guides, and full article text are at: ${SITE.url}/llms-full.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
