import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ModifierPrimer from "@/components/ModifierPrimer";
import ShortcutTable from "@/components/ShortcutTable";
import GuidesGrid from "@/components/GuidesGrid";
import JsonLd from "@/components/JsonLd";
import { CATS, SHORTCUTS, TASKS } from "@/lib/shortcuts";
import { websiteLd, personLd } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[websiteLd, personLd]} />
      <Hero />
      <ModifierPrimer />

      <section id="reference" className="mx-auto max-w-content px-5 pb-16 sm:px-6">
        <h2 className="font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          The shortcut cheat sheet
        </h2>
        <p className="mt-3 max-w-[60ch] text-[16px] text-ink-2">
          Every Windows shortcut you use, side by side with its Mac equivalent. You can
          filter them by category, or just search for what you want to do.
        </p>
        <div className="mt-8">
          <ShortcutTable cats={CATS} shortcuts={SHORTCUTS} />
        </div>
      </section>

      <section id="guides" className="mx-auto max-w-content px-5 pb-16 sm:px-6">
        <h2 className="font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          How to do the everyday things
        </h2>
        <p className="mt-3 max-w-[60ch] text-[16px] text-ink-2">
          The actions that don't map to a single key, like right-clicking, recording your
          screen, or finding where a download went.
        </p>
        <div className="mt-8">
          <GuidesGrid tasks={TASKS} />
        </div>
      </section>
    </>
  );
}
