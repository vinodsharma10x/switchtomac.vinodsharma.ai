import { MODS } from "@/lib/shortcuts";
import { KeyCombo } from "@/components/Keycap";

function MiniArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-faint">
      <path d="M5 12h13" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ModifierPrimer() {
  return (
    <section className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <h2 className="font-display text-[clamp(22px,3.4vw,30px)] font-semibold tracking-[-0.02em]">
        Three keys, and you're 90% there.
      </h2>
      <p className="mt-2 max-w-[62ch] text-[15.5px] text-muted">
        Mac and Windows keyboards have the same modifier keys — they just wear different
        names. Learn these three swaps and most shortcuts fall into place.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {MODS.map((mod, idx) => (
          <div key={idx} className="rounded-2xl border border-line bg-surface p-5 shadow-card">
            <div className="mb-3.5 flex items-center gap-3">
              <span className="kbd kbd--lg">{mod.win}</span>
              <MiniArrow />
              <KeyCombo spec={mod.mac} mac size="lg" />
            </div>
            <h3 className="font-display text-[16.5px] font-semibold tracking-[-0.01em]">
              {mod.name} ({mod.mac.join("")})
            </h3>
            <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{mod.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-line bg-bg-soft px-4 py-3.5 text-[13.5px] text-ink-2">
        <b className="text-ink">One thing to know:</b> Macs <i>do</i> have their own{" "}
        <span className="kbd gl">⌃</span> Control key. You'll meet it now and then —
        right-clicking, opening Mission Control — but day to day,{" "}
        <b className="text-ink">Command (⌘)</b> is the one your thumb wants.
      </div>
    </section>
  );
}
