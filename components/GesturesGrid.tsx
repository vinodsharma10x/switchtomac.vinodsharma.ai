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
        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>Tap to click</title>
            <desc>One finger tapping the trackpad.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <circle cx="110" cy="75" r="19" fill="none" stroke="#2F6BFF" strokeWidth="1.5" opacity="0.35" />
            <circle cx="110" cy="75" r="11" fill="#2F6BFF" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">Tap to click</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Tap with one finger</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">A light tap clicks, no pressing down. Switch it on in Trackpad settings if it is not already.</div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>Right-click</title>
            <desc>Two fingers tapping the trackpad.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <circle cx="92" cy="75" r="16" fill="none" stroke="#2F6BFF" strokeWidth="1.5" opacity="0.35" />
            <circle cx="92" cy="75" r="10" fill="#2F6BFF" />
            <circle cx="128" cy="75" r="16" fill="none" stroke="#2F6BFF" strokeWidth="1.5" opacity="0.35" />
            <circle cx="128" cy="75" r="10" fill="#2F6BFF" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">Right-click</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Tap with two fingers</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">This is your right-click. It opens the same menu the right mouse button did.</div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>Scroll</title>
            <desc>Two fingers moving up and down.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <line x1="110" y1="40" x2="110" y2="120" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerStart="url(#ga)" markerEnd="url(#ga)" />
            <circle cx="96" cy="80" r="10" fill="#2F6BFF" />
            <circle cx="124" cy="80" r="10" fill="#2F6BFF" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">Scroll</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Two fingers, up or down</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">Scroll any page, list, or document.</div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>Zoom</title>
            <desc>Two fingers spreading apart.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <line x1="78" y1="75" x2="48" y2="75" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <line x1="142" y1="75" x2="172" y2="75" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <circle cx="88" cy="75" r="10" fill="#2F6BFF" />
            <circle cx="132" cy="75" r="10" fill="#2F6BFF" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">Zoom in or out</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Pinch or spread two fingers</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">Zoom into photos, maps, and PDFs.</div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>Swipe between pages</title>
            <desc>Two fingers moving left and right.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <circle cx="96" cy="70" r="10" fill="#2F6BFF" />
            <circle cx="124" cy="70" r="10" fill="#2F6BFF" />
            <line x1="58" y1="104" x2="162" y2="104" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerStart="url(#ga)" markerEnd="url(#ga)" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">Swipe between pages</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Two fingers, left or right</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">Go back and forward, like the browser arrows.</div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>Switch desktops and apps</title>
            <desc>Four fingers moving sideways.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <circle cx="66" cy="70" r="8" fill="#2F6BFF" />
            <circle cx="92" cy="70" r="8" fill="#2F6BFF" />
            <circle cx="118" cy="70" r="8" fill="#2F6BFF" />
            <circle cx="144" cy="70" r="8" fill="#2F6BFF" />
            <line x1="52" y1="104" x2="158" y2="104" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerStart="url(#ga)" markerEnd="url(#ga)" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">Switch desktops and apps</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Three or four fingers, sideways</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">Slide between full-screen apps and desktops.</div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>Mission Control</title>
            <desc>Four fingers swiping up.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <line x1="107" y1="98" x2="107" y2="42" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <circle cx="74" cy="104" r="8" fill="#2F6BFF" />
            <circle cx="96" cy="104" r="8" fill="#2F6BFF" />
            <circle cx="118" cy="104" r="8" fill="#2F6BFF" />
            <circle cx="140" cy="104" r="8" fill="#2F6BFF" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">Mission Control</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Swipe up, three or four fingers</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">See every open window laid out at once.</div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>App Exposé</title>
            <desc>Four fingers swiping down.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <circle cx="74" cy="48" r="8" fill="#2F6BFF" />
            <circle cx="96" cy="48" r="8" fill="#2F6BFF" />
            <circle cx="118" cy="48" r="8" fill="#2F6BFF" />
            <circle cx="140" cy="48" r="8" fill="#2F6BFF" />
            <line x1="107" y1="56" x2="107" y2="112" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">App Exposé</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Swipe down, three or four fingers</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">Spread out all the windows of the app you are in.</div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>Show desktop</title>
            <desc>Thumb and three fingers spreading apart.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <line x1="90" y1="54" x2="64" y2="40" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <line x1="130" y1="54" x2="156" y2="40" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <line x1="90" y1="96" x2="64" y2="110" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <line x1="130" y1="96" x2="156" y2="110" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <circle cx="94" cy="60" r="8" fill="#2F6BFF" />
            <circle cx="126" cy="60" r="8" fill="#2F6BFF" />
            <circle cx="94" cy="90" r="8" fill="#2F6BFF" />
            <circle cx="126" cy="90" r="8" fill="#2F6BFF" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">Show desktop</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Spread thumb and three fingers</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">Clear everything out of the way to reach your desktop.</div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 text-center">
          <svg viewBox="0 0 220 150" role="img" className="mx-auto block w-full max-w-[220px]">
            <title>Show all apps</title>
            <desc>Thumb and three fingers pinching together.</desc>
            <rect x="20" y="20" width="180" height="110" rx="14" className="tp-pad" strokeWidth="1.5" />
            <line x1="62" y1="42" x2="86" y2="60" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <line x1="158" y1="42" x2="134" y2="60" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <line x1="62" y1="108" x2="86" y2="90" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <line x1="158" y1="108" x2="134" y2="90" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" markerEnd="url(#ga)" />
            <circle cx="78" cy="56" r="8" fill="#2F6BFF" />
            <circle cx="142" cy="56" r="8" fill="#2F6BFF" />
            <circle cx="78" cy="94" r="8" fill="#2F6BFF" />
            <circle cx="142" cy="94" r="8" fill="#2F6BFF" />
          </svg>
          <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">Show all apps</div>
          <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.06em] text-accent-ink">Pinch thumb and three fingers</div>
          <div className="mt-2 text-[14px] leading-relaxed text-muted">Open the grid of all your installed apps.</div>
        </div>
      </div>
    </>
  );
}
