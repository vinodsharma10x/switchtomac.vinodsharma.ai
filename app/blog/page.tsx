import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import BlogList from "@/components/BlogList";
import { blogLd, breadcrumbLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog: tips for new Mac users",
  description:
    "Short, practical answers to the everyday Mac questions that come up after years on Windows.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={[
          blogLd(posts),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <header className="mb-8">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          Blog
        </span>
        <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          Notes &amp; tips
        </h1>
        <p className="mt-3 max-w-[60ch] text-[16px] text-ink-2">
          Bite-sized answers to the everyday Mac questions for people coming from Windows.
        </p>
      </header>

      <BlogList posts={posts} />
    </div>
  );
}
