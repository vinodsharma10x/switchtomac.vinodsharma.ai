import type { Metadata } from "next";
import GuidesGrid from "@/components/GuidesGrid";
import { TASKS } from "@/lib/shortcuts";

export const metadata: Metadata = {
  title: "Everyday guides for new Mac users",
  description:
    "How to do the everyday things on a Mac that don't map to a single key — right-clicking, screen recording, snapping windows, and more.",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <header className="mb-8">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          Guides
        </span>
        <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          How to do the everyday things
        </h1>
        <p className="mt-3 max-w-[60ch] text-[16px] text-ink-2">
          The actions that don't map to a single key — right-clicking, recording your
          screen, finding where a download went.
        </p>
      </header>

      <GuidesGrid tasks={TASKS} />
    </div>
  );
}
