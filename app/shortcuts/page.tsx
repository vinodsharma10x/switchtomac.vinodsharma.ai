import type { Metadata } from "next";
import ShortcutTable from "@/components/ShortcutTable";
import { CATS, SHORTCUTS } from "@/lib/shortcuts";

export const metadata: Metadata = {
  title: "Keyboard shortcuts: Windows → Mac",
  description:
    "Every Windows keyboard shortcut and its macOS equivalent, searchable and grouped by task.",
};

export default function ShortcutsPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <header className="mb-8">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          Reference
        </span>
        <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          The full translation
        </h1>
        <p className="mt-3 max-w-[60ch] text-[16px] text-ink-2">
          Every shortcut you reach for, side by side. Filter by category, or just search
          for what you want to do.
        </p>
      </header>

      <ShortcutTable cats={CATS} shortcuts={SHORTCUTS} />
    </div>
  );
}
