// ----------------------------------------------------------------
// Curated video picks. Add a new one by dropping its YouTube ID here.
// (The ID is the part after "watch?v=" in a YouTube URL.)
// ----------------------------------------------------------------
export interface Video {
  id: string; // YouTube video id
  title: string;
  note: string;
}

export const VIDEOS: Video[] = [
  {
    id: "Rzwz1E1eyGk",
    title: "Switching from Windows to Mac? Everything You Need to Know",
    note: "A fast, friendly tour of 20+ things that work differently — a great first watch.",
  },
  {
    id: "9mDK3C2em7M",
    title: "Mac Tutorial for Beginners (from a Windows perspective)",
    note: "A thorough walkthrough of the macOS basics, framed for people coming from a PC.",
  },
  {
    id: "BsCpxO3xdX0",
    title: "Windows vs macOS — Side-by-Side, the Top Things to Know",
    note: "Direct comparisons of the most common day-to-day differences.",
  },
  {
    id: "67keaaWOKzE",
    title: "Mac Tutorial for Beginners — Switching from Windows",
    note: "Covers the fundamentals end to end if you like to learn from the ground up.",
  },
];
