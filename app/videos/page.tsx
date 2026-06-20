import type { Metadata } from "next";
import YouTube from "@/components/YouTube";
import { VIDEOS } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Videos: switching from Windows to Mac",
  description:
    "A short, curated set of video walkthroughs for people moving from Windows to a MacBook.",
  alternates: { canonical: "/videos" },
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <header className="mb-8">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          Videos
        </span>
        <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          Worth watching
        </h1>
        <p className="mt-3 max-w-[60ch] text-[16px] text-ink-2">
          Sometimes it's easier to watch someone do it. A short, curated set of
          walkthroughs from people who explain the switch well.
        </p>
      </header>

      {VIDEOS.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line-2 bg-surface p-9 text-center text-[15px] text-muted">
          No videos yet. Add some in <code className="font-mono text-ink">lib/videos.ts</code>.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {VIDEOS.map((v) => (
            <div key={v.id}>
              <YouTube id={v.id} title={v.title} />
              <h3 className="mt-3 font-display text-[16.5px] font-semibold leading-snug tracking-[-0.01em]">
                {v.title}
              </h3>
              <p className="mt-1 text-[14px] leading-relaxed text-muted">{v.note}</p>
            </div>
          ))}
        </div>
      )}

      <p className="mt-10 text-[13px] text-faint">
        Videos are embedded from YouTube and belong to their creators. Picks are curated,
        not sponsored.
      </p>
    </div>
  );
}
