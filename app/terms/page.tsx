import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using Switch: a free, open-source, as-is reference for moving from Windows to a Mac. Not affiliated with Apple or Microsoft.",
  alternates: { canonical: "/terms" },
};

const link = "font-medium text-accent-ink underline underline-offset-2";
const h2 = "mt-10 font-display text-[22px] font-semibold tracking-[-0.02em]";
const p = "mt-4 text-[16.5px] leading-[1.7] text-ink-2";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <div className="max-w-[720px]">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          Legal
        </span>
        <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          Terms of Use
        </h1>
        <p className="mt-3 font-mono text-[12.5px] text-faint">Last updated: June 20, 2026</p>

        <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-2">
          By using switchtomac.app (the site), you agree to these terms. If you do not
          agree, please do not use the site.
        </p>

        <h2 className={h2}>What this site is</h2>
        <p className={p}>
          {SITE.name} is a free, open-source reference for moving from Windows to a Mac:
          keyboard shortcut translations, everyday guides, articles, and curated videos. It
          is provided for general information.
        </p>

        <h2 className={h2}>Accuracy, and &ldquo;as is&rdquo;</h2>
        <p className={p}>
          I work to keep the shortcuts and guides correct and current, verified against
          Apple&apos;s documentation for {SITE.macOS}. Even so, the site is provided
          &ldquo;as is,&rdquo; without warranties of any kind. macOS changes, settings vary,
          and mistakes happen. Verify anything important before you rely on it. I am not
          liable for any loss or damage arising from use of the site.
        </p>

        <h2 className={h2}>Not affiliated with Apple or Microsoft</h2>
        <p className={p}>
          This is an independent project. Mac, MacBook, macOS, and Finder are trademarks of
          Apple Inc. Windows is a trademark of Microsoft Corporation. {SITE.name} is not
          affiliated with, endorsed by, or sponsored by Apple or Microsoft. All trademarks
          belong to their owners.
        </p>

        <h2 className={h2}>The code is open source</h2>
        <p className={p}>
          The source code is available on{" "}
          <a href={SITE.repo} target="_blank" rel="noreferrer" className={link}>
            GitHub
          </a>{" "}
          under the MIT License. You are free to use, copy, modify, and share the code under
          that license. You may also quote or link to the written content with attribution.
        </p>

        <h2 className={h2}>Videos and external links</h2>
        <p className={p}>
          Videos on the Videos page are embedded from YouTube and belong to their creators.
          Picks are curated, not sponsored. The site also links to other websites I do not
          control and is not responsible for their content or policies.
        </p>

        <h2 className={h2}>Limitation of liability</h2>
        <p className={p}>
          To the fullest extent allowed by law, the site and its author are not liable for
          any indirect, incidental, or consequential damages arising from your use of the
          site.
        </p>

        <h2 className={h2}>Changes</h2>
        <p className={p}>
          I may update these terms as the site evolves. Continued use after changes means
          you accept the updated terms.
        </p>

        <h2 className={h2}>Governing law</h2>
        <p className={p}>
          These terms are governed by the laws of the State of Florida, United States,
          without regard to conflict-of-law rules.
        </p>

        <h2 className={h2}>Contact</h2>
        <p className={p}>
          Questions? Open an issue on the{" "}
          <a href={SITE.repo} target="_blank" rel="noreferrer" className={link}>
            GitHub repo
          </a>{" "}
          or reach me at{" "}
          <a href="https://vinodsharma.ai" target="_blank" rel="noreferrer" className={link}>
            vinodsharma.ai
          </a>
          .
        </p>
      </div>
    </div>
  );
}
