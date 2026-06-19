import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-[28px] w-[28px] place-items-center rounded-lg border border-line-2 bg-gradient-to-b from-white to-[#eef1f7] font-mono text-[15px] text-accent-ink shadow-[0_1px_0_#c7cdd7,inset_0_1px_0_#fff]">
                ⌘
              </span>
              <span className="font-display text-[17px] font-bold tracking-tight">
                {SITE.name}
                <span className="text-accent-ink">.</span>
              </span>
            </div>
            <p className="mt-3 max-w-[40ch] text-[13.5px] text-muted">
              {SITE.tagline} Made for everyone making the switch — and open source under
              the MIT License.
            </p>
            <p className="mt-3 font-mono text-[12px] tracking-wide text-faint">
              नाम अमर — made to last, and to be shared.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Explore
            </h4>
            <ul className="mt-3 space-y-2 text-[14px]">
              <li><Link href="/shortcuts" className="text-ink-2 hover:text-accent-ink">Reference</Link></li>
              <li><Link href="/guides" className="text-ink-2 hover:text-accent-ink">Guides</Link></li>
              <li><Link href="/blog" className="text-ink-2 hover:text-accent-ink">Blog</Link></li>
              <li><Link href="/videos" className="text-ink-2 hover:text-accent-ink">Videos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Project
            </h4>
            <ul className="mt-3 space-y-2 text-[14px]">
              <li><Link href="/about" className="text-ink-2 hover:text-accent-ink">About</Link></li>
              <li><a href={SITE.repo} target="_blank" rel="noreferrer" className="text-ink-2 hover:text-accent-ink">GitHub ↗</a></li>
              <li><a href={`${SITE.repo}/blob/main/LICENSE`} target="_blank" rel="noreferrer" className="text-ink-2 hover:text-accent-ink">MIT License</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[13px] text-muted">
          <span>Built by {SITE.authors}.</span>
          <span>Current for {SITE.macOS}. Shortcuts can vary slightly by app.</span>
        </div>
      </div>
    </footer>
  );
}
