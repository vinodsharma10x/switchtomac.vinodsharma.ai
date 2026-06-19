"use client";

import { KeyCombo } from "@/components/Keycap";
import { catName } from "@/lib/shortcuts";
import type { Task } from "@/lib/shortcuts";

export default function TaskCard({ task }: { task: Task }) {
  const winText = typeof task.win === "string" ? task.win : task.win.join(" ");
  return (
    <div className="flex flex-col gap-2.5 rounded-2xl border border-line bg-surface p-5 shadow-card">
      <span className="self-start rounded-full bg-accent-weak px-2.5 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-accent-ink">
        {catName(task.c)}
      </span>
      <h3 className="font-display text-[16.5px] font-semibold leading-tight tracking-[-0.01em]">
        {task.t}
      </h3>
      <div className="my-0.5 flex flex-wrap items-center gap-1.5">
        <KeyCombo spec={task.m} mac />
      </div>
      <p className="text-[14px] leading-relaxed text-ink-2">{task.how}</p>
      <div className="mt-auto pt-1.5 font-mono text-[11.5px] tracking-[0.02em] text-faint">
        <b className="font-semibold text-muted">On Windows:</b> {winText}
      </div>
    </div>
  );
}
