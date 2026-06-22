import { GESTURES } from "@/lib/gestures";

// The diagram for each gesture, keyed by id. Text comes from lib/gestures.
const SVGS: Record<string, JSX.Element> = {
  "tap-to-click": (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <circle cx="110" cy="75" r="19" fill="none" stroke="#2F6BFF" strokeWidth="1.5" opacity="0.35" />
      <circle cx="110" cy="75" r="11" fill="#2F6BFF" />
    </>
  ),
  "right-click": (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <circle cx="92" cy="75" r="16" fill="none" stroke="#2F6BFF" strokeWidth="1.5" opacity="0.35" />
      <circle cx="92" cy="75" r="10" fill="#2F6BFF" />
      <circle cx="128" cy="75" r="16" fill="none" stroke="#2F6BFF" strokeWidth="1.5" opacity="0.35" />
      <circle cx="128" cy="75" r="10" fill="#2F6BFF" />
    </>
  ),
  scroll: (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <line x1="110" y1="40" x2="110" y2="120" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerStart="url(#ga)" markerEnd="url(#ga)" />
      <circle cx="96" cy="80" r="10" fill="#2F6BFF" />
      <circle cx="124" cy="80" r="10" fill="#2F6BFF" />
    </>
  ),
  zoom: (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <line x1="78" y1="75" x2="48" y2="75" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <line x1="142" y1="75" x2="172" y2="75" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <circle cx="88" cy="75" r="10" fill="#2F6BFF" />
      <circle cx="132" cy="75" r="10" fill="#2F6BFF" />
    </>
  ),
  "swipe-pages": (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <circle cx="96" cy="70" r="10" fill="#2F6BFF" />
      <circle cx="124" cy="70" r="10" fill="#2F6BFF" />
      <line x1="58" y1="104" x2="162" y2="104" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerStart="url(#ga)" markerEnd="url(#ga)" />
    </>
  ),
  "switch-apps": (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <circle cx="66" cy="70" r="8" fill="#2F6BFF" />
      <circle cx="92" cy="70" r="8" fill="#2F6BFF" />
      <circle cx="118" cy="70" r="8" fill="#2F6BFF" />
      <circle cx="144" cy="70" r="8" fill="#2F6BFF" />
      <line x1="52" y1="104" x2="158" y2="104" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerStart="url(#ga)" markerEnd="url(#ga)" />
    </>
  ),
  "mission-control": (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <line x1="107" y1="98" x2="107" y2="42" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <circle cx="74" cy="104" r="8" fill="#2F6BFF" />
      <circle cx="96" cy="104" r="8" fill="#2F6BFF" />
      <circle cx="118" cy="104" r="8" fill="#2F6BFF" />
      <circle cx="140" cy="104" r="8" fill="#2F6BFF" />
    </>
  ),
  "app-expose": (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <circle cx="74" cy="48" r="8" fill="#2F6BFF" />
      <circle cx="96" cy="48" r="8" fill="#2F6BFF" />
      <circle cx="118" cy="48" r="8" fill="#2F6BFF" />
      <circle cx="140" cy="48" r="8" fill="#2F6BFF" />
      <line x1="107" y1="56" x2="107" y2="112" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
    </>
  ),
  "show-desktop": (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <line x1="90" y1="54" x2="64" y2="40" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <line x1="130" y1="54" x2="156" y2="40" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <line x1="90" y1="96" x2="64" y2="110" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <line x1="130" y1="96" x2="156" y2="110" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <circle cx="94" cy="60" r="8" fill="#2F6BFF" />
      <circle cx="126" cy="60" r="8" fill="#2F6BFF" />
      <circle cx="94" cy="90" r="8" fill="#2F6BFF" />
      <circle cx="126" cy="90" r="8" fill="#2F6BFF" />
    </>
  ),
  "show-all-apps": (
    <>
      <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
      <line x1="62" y1="42" x2="86" y2="60" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <line x1="158" y1="42" x2="134" y2="60" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <line x1="62" y1="108" x2="86" y2="90" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <line x1="158" y1="108" x2="134" y2="90" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
      <circle cx="78" cy="56" r="8" fill="#2F6BFF" />
      <circle cx="142" cy="56" r="8" fill="#2F6BFF" />
      <circle cx="78" cy="94" r="8" fill="#2F6BFF" />
      <circle cx="142" cy="94" r="8" fill="#2F6BFF" />
    </>
  ),
};

// The ten Mac trackpad gestures, as a grid of inline-SVG diagrams.
// Used on the home page and inside the trackpad-gestures blog post.
export default function GesturesGrid() {
  return (
    <>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <marker id="ga" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1 L8 5 L2 9" fill="none" stroke="#2F6BFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
      </svg>

      <div className="grid gap-4 sm:grid-cols-2">
        {GESTURES.map((g) => (
          <div key={g.id} className="rounded-2xl border border-line bg-surface p-5 text-center">
            <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
              <title>{g.name}</title>
              {SVGS[g.id]}
            </svg>
            <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">
              {g.name}
            </div>
            <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">
              {g.instruction}
            </div>
            <div className="mt-2 text-[14px] leading-relaxed text-muted">{g.use}</div>
          </div>
        ))}
      </div>
    </>
  );
}
