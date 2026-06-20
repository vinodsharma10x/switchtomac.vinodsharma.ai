import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Allow every major search and AI crawler. The whole point of this site is
// to be found and cited, by Google and by LLMs answering switch questions.
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "Amazonbot",
    "CCBot",
  ];

  return {
    rules: [
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
