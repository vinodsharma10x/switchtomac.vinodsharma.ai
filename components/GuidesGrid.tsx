"use client";

import { useMemo, useState } from "react";
import TaskCard from "@/components/TaskCard";
import type { Task, KeySpec } from "@/lib/shortcuts";

function flatten(spec: KeySpec | string) {
  return typeof spec === "string" ? spec : spec.join(" ");
}

export default function GuidesGrid({ tasks }: { tasks: Task[] }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      tasks.filter((t) =>
        q === ""
          ? true
          : `${t.t} ${t.kw ?? ""} ${t.how} ${flatten(t.win)} ${flatten(t.m)}`
              .toLowerCase()
              .includes(q)
      ),
    [tasks, q]
  );

  return (
    <div>
      <div className="relative max-w-[460px]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides: “right click”, “record”, “download”…"
          aria-label="Search guides"
          className="h-11 w-full rounded-xl border border-line-2 bg-surface pl-10 pr-4 text-[14.5px] outline-none transition-shadow focus:border-accent focus:shadow-[0_0_0_4px_rgba(47,107,255,0.18)]"
        />
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {filtered.map((t, i) => (
          <TaskCard key={i} task={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-7 rounded-2xl border border-dashed border-line-2 bg-surface p-9 text-center text-[15px] text-muted">
          No guides match <b className="text-ink">“{query.trim()}”</b>.
        </div>
      )}
    </div>
  );
}
