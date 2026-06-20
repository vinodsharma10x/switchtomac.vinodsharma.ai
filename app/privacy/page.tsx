import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Switch collects and why: no accounts, no forms, no selling your data. Just privacy-respecting analytics, with consent controls for the EU.",
  alternates: { canonical: "/privacy" },
};

const link = "font-medium text-accent-ink underline underline-offset-2";
const h2 = "mt-10 font-display text-[22px] font-semibold tracking-[-0.02em]";
const p = "mt-4 text-[16.5px] leading-[1.7] text-ink-2";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <div className="max-w-[720px]">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          Legal
        </span>
        <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-[12.5px] text-faint">Last updated: June 20, 2026</p>

        <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-2">
          {SITE.name} (switchtomac.app) is a free, open-source guide for moving from Windows
          to a Mac. The short version: no accounts, no forms, no selling your data. Just
          basic, privacy-respecting analytics so I can see which guides help and fix what
          doesn&apos;t.
        </p>

        <h2 className={h2}>What I collect</h2>
        <p className={p}>
          The site has no login and no forms, so it does not collect your name, email, or
          anything you type. Through Google Analytics 4 and Microsoft Clarity (loaded with
          Google Tag Manager), it collects anonymous, aggregate usage data:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16.5px] leading-[1.7] text-ink-2">
          <li>Pages you visit and how you got here</li>
          <li>Approximate location (country or region from your IP, never a precise address)</li>
          <li>Device, browser, and screen size</li>
          <li>Anonymous interaction data such as clicks and scrolling (Microsoft Clarity)</li>
        </ul>
        <p className={p}>This data is aggregate and is not used to identify you personally.</p>

        <h2 className={h2}>Cookies and consent</h2>
        <p className={p}>
          Analytics uses first-party cookies (for example <code>_ga</code>) set on
          switchtomac.app.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16.5px] leading-[1.7] text-ink-2">
          <li>
            In the EU, UK, and Switzerland, analytics stays off until you accept it in the
            cookie banner (Google Consent Mode v2).
          </li>
          <li>Everywhere else, analytics is on by default and you can turn it off with Decline.</li>
        </ul>
        <p className={p}>
          Your choice is stored in your browser (a value named <code>switch-consent</code>)
          so the banner only asks once. Clear your browser storage to be asked again.
        </p>

        <h2 className={h2}>Tools I use, and their policies</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16.5px] leading-[1.7] text-ink-2">
          <li>
            Google Analytics 4 and Google Tag Manager (Google). See{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className={link}>
              Google&apos;s privacy policy
            </a>
            .
          </li>
          <li>
            Microsoft Clarity (Microsoft), for heatmaps and session replays. Clarity masks
            text you type by default. See{" "}
            <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noreferrer" className={link}>
              Microsoft&apos;s privacy statement
            </a>
            .
          </li>
          <li>
            YouTube videos embedded on the Videos page (Google). Playing a video may set
            YouTube&apos;s cookies under their policy.
          </li>
        </ul>
        <p className={p}>
          I do not run ads, and Google Signals and ads personalization are turned off, so no
          cross-site advertising cookies are set.
        </p>

        <h2 className={h2}>What I do not do</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16.5px] leading-[1.7] text-ink-2">
          <li>I do not sell or rent your data.</li>
          <li>I do not show ads or use advertising or remarketing trackers.</li>
          <li>I do not collect personal information, because there is nothing here to sign up for.</li>
        </ul>

        <h2 className={h2}>Your choices</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16.5px] leading-[1.7] text-ink-2">
          <li>Use Decline in the banner, or clear cookies in your browser.</li>
          <li>
            Install{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className={link}>
              Google&apos;s Analytics opt-out
            </a>
            .
          </li>
          <li>Block cookies in your browser entirely. The site still works.</li>
        </ul>
        <p className={p}>
          If you are in the EU/UK (GDPR) or California (CCPA/CPRA), the analytics is
          processed by Google and Microsoft, so requests about that data are handled through
          them. You can also reach me below.
        </p>

        <h2 className={h2}>Children</h2>
        <p className={p}>
          This site is not directed at children under 13 and does not knowingly collect
          their data.
        </p>

        <h2 className={h2}>Changes</h2>
        <p className={p}>
          I may update this page as the site changes. The date at the top shows the latest
          version.
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
