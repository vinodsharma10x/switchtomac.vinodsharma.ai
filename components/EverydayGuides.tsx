"use client";

import GuidesGrid from "@/components/GuidesGrid";
import { TASKS } from "@/lib/shortcuts";

// The searchable everyday-tasks grid, self-contained so it can be dropped
// into a blog post via <EverydayGuides /> in MDX.
export default function EverydayGuides() {
  return <GuidesGrid tasks={TASKS} />;
}
