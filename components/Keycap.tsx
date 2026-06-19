"use client";

import React from "react";
import type { KeySpec } from "@/lib/shortcuts";

const WORDS = new Set(["then", "or", "hold", "tap", "press", "click", "drag"]);
const SEPS = new Set(["/"]);
const GLYPH_RE = /[⌘⌥⌃⇧⏎⌫⎋←→↑↓]/;

function isGlyph(tok: string) {
  return GLYPH_RE.test(tok);
}

export function KeyCombo({
  spec,
  mac = false,
  size = "md",
}: {
  spec: KeySpec;
  mac?: boolean;
  size?: "md" | "lg";
}) {
  // A plain string renders as an italic phrase (e.g. "Apple menu ▸ System Settings").
  if (typeof spec === "string") {
    return <span className={`phrase${mac ? "" : " win"}`}>{spec}</span>;
  }

  const lg = size === "lg" ? " kbd--lg" : "";
  const out: React.ReactNode[] = [];
  let prevWasKey = false;

  spec.forEach((tok, i) => {
    if (WORDS.has(tok)) {
      out.push(
        <span key={i} className="kword">
          {tok}
        </span>
      );
      prevWasKey = false;
    } else if (SEPS.has(tok)) {
      out.push(
        <span key={i} className="ksep">
          {tok}
        </span>
      );
      prevWasKey = false;
    } else {
      if (prevWasKey) {
        out.push(
          <span key={`plus-${i}`} className="ksep">
            +
          </span>
        );
      }
      out.push(
        <span
          key={i}
          className={`kbd${mac ? " kbd--mac" : ""}${isGlyph(tok) ? " gl" : ""}${lg}`}
        >
          {tok}
        </span>
      );
      prevWasKey = true;
    }
  });

  return <span className="inline-flex flex-wrap items-center gap-1.5">{out}</span>;
}
