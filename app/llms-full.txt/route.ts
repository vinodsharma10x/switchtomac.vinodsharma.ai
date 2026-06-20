import { SITE } from "@/lib/site";
import {
  CATS,
  SHORTCUTS,
  TASKS,
  catName,
  type KeySpec,
} from "@/lib/shortcuts";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

function keys(spec: KeySpec) {
  return Array.isArray(spec) ? spec.join(" ") : spec;
}

// Strip MDX/JSX tags and leave readable prose for LLM ingestion.
function toPlainText(content: string) {
  return content
    .replace(/<[^>]*>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function GET() {
  const sections: string[] = [];

  sections.push(`# ${SITE.name} — Full Content

Site: ${SITE.url}
Author: ${SITE.author.name} (${SITE.author.url})
Open source (MIT): ${SITE.repo}
Verified against ${SITE.macOS}.

${SITE.description}`);

  // Full Windows -> Mac shortcut tables, grouped by category.
  sections.push("## Windows to Mac keyboard shortcuts");
  for (const cat of CATS) {
    const rows = SHORTCUTS.filter((s) => s.c === cat.id);
    if (!rows.length) continue;
    const lines = rows.map((s) => {
      const note = s.n ? ` (${s.n})` : "";
      return `- ${s.a}: Windows ${keys(s.w)} -> Mac ${keys(s.m)}${note}`;
    });
    sections.push(`### ${cat.name}\n${lines.join("\n")}`);
  }

  // Everyday how-to guides (the tasks that do not map to a single key).
  sections.push("## Everyday guides");
  for (const t of TASKS) {
    sections.push(
      `### ${t.t} (${catName(t.c)})\nWindows: ${keys(t.win)} | Mac: ${keys(t.m)}\n${t.how}`
    );
  }

  // Full article text.
  sections.push("## Articles");
  for (const post of getAllPosts()) {
    sections.push(
      `### ${post.title}
URL: ${SITE.url}/blog/${post.slug}
Published: ${post.date}
Author: ${post.author || SITE.author.name}${
        post.tags && post.tags.length ? `\nTags: ${post.tags.join(", ")}` : ""
      }

${toPlainText(post.content)}`
    );
  }

  return new Response(sections.join("\n\n---\n\n") + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
