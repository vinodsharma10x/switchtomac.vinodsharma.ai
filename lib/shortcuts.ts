// ================================================================
// THE DATA. Want to add a shortcut or a guide? Add an entry below;
// the keycaps, search, and category filtering all pick it up.
//
// Keys are arrays of tokens. Words like "then"/"or"/"hold" render
// as small labels; "/" renders as a separator; "+" is inserted
// automatically between real keys. A plain string (instead of an
// array) renders as an italic phrase, e.g. "Apple menu ▸ System Settings".
//
// Verified against Apple's documentation for macOS Tahoe (macOS 26).
// ================================================================

export type KeySpec = string[] | string;

export interface Cat {
  id: string;
  name: string;
}

export interface Shortcut {
  c: string; // category id
  a: string; // action
  w: KeySpec; // Windows keys
  m: KeySpec; // Mac keys
  n?: string; // note
  kw?: string; // extra search keywords
}

export interface Task {
  c: string;
  t: string; // task title
  win: string | string[];
  m: KeySpec; // Mac way
  how: string;
  kw?: string;
}

export const CATS: Cat[] = [
  { id: "essentials", name: "Essentials" },
  { id: "text", name: "Text & cursor" },
  { id: "apps", name: "Windows & apps" },
  { id: "shots", name: "Screenshots" },
  { id: "files", name: "Files & Finder" },
  { id: "system", name: "System & search" },
  { id: "web", name: "Browser" },
];

export const MODS = [
  { win: "Ctrl", mac: ["⌘"], name: "Command", body: "Command does what Ctrl did. Copy, paste, save, find: just slide your thumb one key over." },
  { win: "Alt", mac: ["⌥"], name: "Option", body: "Option is your Alt: same place, same job, and it's also how you type accented characters." },
  { win: "⊞ Win", mac: ["⌘"], name: "Command", body: "The Windows key's jobs (search, run, lock) move to Command and to Spotlight (⌘ Space)." },
];

export const SHORTCUTS: Shortcut[] = [
  // Essentials
  { c: "essentials", a: "Copy", w: ["Ctrl", "C"], m: ["⌘", "C"] },
  { c: "essentials", a: "Cut", w: ["Ctrl", "X"], m: ["⌘", "X"] },
  { c: "essentials", a: "Paste", w: ["Ctrl", "V"], m: ["⌘", "V"] },
  { c: "essentials", a: "Paste without formatting", w: ["Ctrl", "Shift", "V"], m: ["⌥", "⇧", "⌘", "V"], kw: "match style plain text" },
  { c: "essentials", a: "Undo", w: ["Ctrl", "Z"], m: ["⌘", "Z"] },
  { c: "essentials", a: "Redo", w: ["Ctrl", "Y"], m: ["⇧", "⌘", "Z"], n: "Redo is Shift-Command-Z on a Mac." },
  { c: "essentials", a: "Select all", w: ["Ctrl", "A"], m: ["⌘", "A"] },
  { c: "essentials", a: "Save", w: ["Ctrl", "S"], m: ["⌘", "S"] },
  { c: "essentials", a: "Print", w: ["Ctrl", "P"], m: ["⌘", "P"] },
  { c: "essentials", a: "Find on page", w: ["Ctrl", "F"], m: ["⌘", "F"] },
  { c: "essentials", a: "Find next", w: ["F3"], m: ["⌘", "G"] },
  { c: "essentials", a: "New", w: ["Ctrl", "N"], m: ["⌘", "N"] },
  { c: "essentials", a: "Open", w: ["Ctrl", "O"], m: ["⌘", "O"] },
  { c: "essentials", a: "Close the window", w: ["Ctrl", "W"], m: ["⌘", "W"] },
  { c: "essentials", a: "Quit the whole app", w: ["Alt", "F4"], m: ["⌘", "Q"], n: "⌘W closes one window; ⌘Q quits the app entirely.", kw: "exit" },
  { c: "essentials", a: "Bold", w: ["Ctrl", "B"], m: ["⌘", "B"] },
  { c: "essentials", a: "Italic", w: ["Ctrl", "I"], m: ["⌘", "I"] },
  { c: "essentials", a: "Underline", w: ["Ctrl", "U"], m: ["⌘", "U"] },

  // Text & cursor
  { c: "text", a: "Jump to start of line", w: ["Home"], m: ["⌘", "←"], kw: "home beginning" },
  { c: "text", a: "Jump to end of line", w: ["End"], m: ["⌘", "→"], kw: "end" },
  { c: "text", a: "Jump to start of document", w: ["Ctrl", "Home"], m: ["⌘", "↑"] },
  { c: "text", a: "Jump to end of document", w: ["Ctrl", "End"], m: ["⌘", "↓"] },
  { c: "text", a: "Move one word left", w: ["Ctrl", "←"], m: ["⌥", "←"] },
  { c: "text", a: "Move one word right", w: ["Ctrl", "→"], m: ["⌥", "→"] },
  { c: "text", a: "Select to start of line", w: ["Shift", "Home"], m: ["⇧", "⌘", "←"] },
  { c: "text", a: "Select to end of line", w: ["Shift", "End"], m: ["⇧", "⌘", "→"] },
  { c: "text", a: "Select word by word", w: ["Ctrl", "Shift", "←", "/", "→"], m: ["⇧", "⌥", "←", "/", "→"] },
  { c: "text", a: "Page up / down", w: ["Page Up", "/", "Page Down"], m: ["fn", "↑", "/", "↓"] },
  { c: "text", a: "Delete forward", w: ["Delete"], m: ["fn", "⌫"], n: "On a Mac, ⌫ deletes backward (like Backspace). fn+⌫ deletes ahead. Control+D works too.", kw: "forward del" },
  { c: "text", a: "Delete the previous word", w: ["Ctrl", "Backspace"], m: ["⌥", "⌫"] },

  // Windows & apps
  { c: "apps", a: "Switch between apps", w: ["Alt", "Tab"], m: ["⌘", "Tab"] },
  { c: "apps", a: "Switch windows of one app", w: "Alt + Tab cycles all", m: ["⌘", "`"], n: "The ` key sits just above Tab.", kw: "same application" },
  { c: "apps", a: "Minimize the window", w: ["⊞ Win", "↓"], m: ["⌘", "M"] },
  { c: "apps", a: "Hide the app", w: "-", m: ["⌘", "H"] },
  { c: "apps", a: "Hide every other app", w: "-", m: ["⌘", "⌥", "H"] },
  { c: "apps", a: "Force quit a frozen app", w: ["Ctrl", "Alt", "Delete"], m: ["⌘", "⌥", "⎋"], n: "Opens the Force Quit window. (Ctrl-Alt-Del also covers lock/sign-out on Windows.)", kw: "task manager kill not responding crash" },
  { c: "apps", a: "See all open windows", w: ["⊞ Win", "Tab"], m: ["⌃", "↑"], n: "Mission Control, or swipe up with three or four fingers.", kw: "task view expose mission control" },
  { c: "apps", a: "See all windows of this app", w: "-", m: ["⌃", "↓"] },
  { c: "apps", a: "Move between desktops", w: ["Ctrl", "⊞ Win", "←", "/", "→"], m: ["⌃", "←", "/", "→"], kw: "virtual spaces workspace" },
  { c: "apps", a: "Show the desktop", w: ["⊞ Win", "D"], m: ["fn", "F11"], n: "Or press ⌘ with the Mission Control key.", kw: "minimize all" },
  { c: "apps", a: "Full-screen the window", w: ["F11"], m: ["⌃", "⌘", "F"], n: "Or click the green button at the top-left of the window." },

  // Screenshots
  { c: "shots", a: "Capture the whole screen", w: ["PrtScn"], m: ["⌘", "⇧", "3"] },
  { c: "shots", a: "Capture part of the screen", w: ["⊞ Win", "Shift", "S"], m: ["⌘", "⇧", "4"], n: "Crosshair appears: drag to select, release to save to the Desktop.", kw: "snip region selection" },
  { c: "shots", a: "Capture a single window", w: ["Alt", "PrtScn"], m: ["⌘", "⇧", "4", "then", "Space"], n: "Press Space, then click the window you want." },
  { c: "shots", a: "Screenshot & recording bar", w: ["⊞ Win", "G"], m: ["⌘", "⇧", "5"], n: "All options in one place, including screen recording.", kw: "record video toolbar" },
  { c: "shots", a: "Copy a shot to the clipboard", w: "Win + Shift + S copies", m: ["⌃", "⌘", "⇧", "4"], n: "Add Control to any capture to copy it instead of saving a file.", kw: "clipboard paste" },

  // Files & Finder
  { c: "files", a: "Open the file manager", w: ["⊞ Win", "E"], m: "Finder, the smiley face in the Dock", n: "Finder is always running. ⌥⌘Space opens a Finder search window.", kw: "explorer" },
  { c: "files", a: "New folder", w: ["Ctrl", "Shift", "N"], m: ["⌘", "⇧", "N"] },
  { c: "files", a: "Rename a file", w: ["F2"], m: ["⏎"], n: "Select the file, then press Return.", kw: "enter" },
  { c: "files", a: "File details (Properties)", w: ["Alt", "⏎"], m: ["⌘", "I"], n: "Called “Get Info” on a Mac.", kw: "properties info" },
  { c: "files", a: "Move a file to the bin", w: ["Delete"], m: ["⌘", "⌫"], kw: "trash recycle delete" },
  { c: "files", a: "Empty the bin", w: "-", m: ["⌘", "⇧", "⌫"], kw: "trash recycle" },
  { c: "files", a: "Preview a file instantly", w: "-", m: ["Space"], n: "Quick Look: select a file and tap Space. A Mac favorite.", kw: "quick look peek view" },
  { c: "files", a: "Move a file (cut & paste)", w: ["Ctrl", "X", "/", "Ctrl", "V"], m: ["⌘", "C", "then", "⌥", "⌘", "V"], n: "Copy first, then Option-Command-V moves it instead of copying.", kw: "cut" },

  // System & search
  { c: "system", a: "Search & launch anything", w: ["⊞ Win"], m: ["⌘", "Space"], n: "Spotlight replaces the Start menu and Run box: type to find apps, files, math, even clipboard history.", kw: "start menu run search spotlight launcher" },
  { c: "system", a: "Open Settings", w: ["⊞ Win", "I"], m: "Apple menu ▸ System Settings", kw: "control panel preferences" },
  { c: "system", a: "Lock the screen", w: ["⊞ Win", "L"], m: ["⌃", "⌘", "Q"] },
  { c: "system", a: "Log out", w: "-", m: ["⇧", "⌘", "Q"], kw: "sign out" },
  { c: "system", a: "Emoji picker", w: ["⊞ Win", "."], m: ["fn", "E"], n: "Or Control-Command-Space.", kw: "emoji symbols" },
  { c: "system", a: "Accents & special characters", w: "-", m: "hold ⌥, or press fn twice", n: "Hold a letter for a popup of accents, or use ⌥ combos (⌥e then e → é).", kw: "accent character viewer special" },
  { c: "system", a: "The full list of apps", w: "Start menu, then scroll", m: ["fn", "⇧", "A"], n: "Opens “Applications.” (Launchpad was removed in macOS Tahoe.)", kw: "all apps launchpad applications" },

  // Browser
  { c: "web", a: "New tab", w: ["Ctrl", "T"], m: ["⌘", "T"] },
  { c: "web", a: "Reopen the last closed tab", w: ["Ctrl", "Shift", "T"], m: ["⌘", "⇧", "T"] },
  { c: "web", a: "Close the tab", w: ["Ctrl", "W"], m: ["⌘", "W"] },
  { c: "web", a: "Jump to the address bar", w: ["Ctrl", "L"], m: ["⌘", "L"], kw: "url omnibox" },
  { c: "web", a: "Reload the page", w: ["F5"], m: ["⌘", "R"], kw: "refresh" },
  { c: "web", a: "Hard reload", w: ["Ctrl", "F5"], m: ["⌘", "⇧", "R"] },
  { c: "web", a: "Zoom in / out", w: ["Ctrl", "+ / −"], m: ["⌘", "+ / −"] },
  { c: "web", a: "Next / previous tab", w: ["Ctrl", "Tab"], m: ["⌃", "Tab"], n: "Or ⌘1–9 to jump straight to a tab." },
  { c: "web", a: "Bookmark this page", w: ["Ctrl", "D"], m: ["⌘", "D"] },
  { c: "web", a: "Downloads", w: ["Ctrl", "J"], m: ["⌘", "⌥", "L"], n: "That's Safari; in Chrome it's ⇧⌘J." },
];

export const TASKS: Task[] = [
  { c: "apps", t: "Right-click without a right button", win: "Right mouse button", m: ["⌃", "click"], how: "Click with two fingers on the trackpad; that's on by default. Prefer a corner? Turn on a bottom-right click in System Settings ▸ Trackpad ▸ Secondary click. Holding Control and clicking always works too.", kw: "context menu secondary right click trackpad" },
  { c: "shots", t: "Take a screenshot of part of the screen", win: "Win + Shift + S", m: ["⌘", "⇧", "4"], how: "Press it, drag the crosshair over the area, and release, and it saves to your Desktop. Add Control (⌃⌘⇧4) to copy it to the clipboard instead.", kw: "snip region capture screenshot" },
  { c: "shots", t: "Screenshot or record your screen", win: "Win + G (Game Bar)", m: ["⌘", "⇧", "5"], how: "⌘⇧5 opens one small toolbar that does both. For a still image, pick capture the whole screen, a window, or a selection. For video, choose Record Entire Screen or Record Selected Portion, then click Record. Recordings stop from the icon in the menu bar.", kw: "screenshot screen recording video capture" },
  { c: "system", t: "Find and open an app", win: "Start menu / Win", m: ["⌘", "Space"], how: "Tap ⌘Space, start typing the app's name, and press Return. Spotlight is your Start menu, Run box, and file search rolled into one.", kw: "launch start menu run search open program" },
  { c: "apps", t: "Force quit a frozen app", win: "Ctrl + Alt + Delete", m: ["⌘", "⌥", "⎋"], how: "Opens the Force Quit window: pick the stuck app and click Force Quit. For live CPU and memory stats (the “Task Manager”), open Activity Monitor via Spotlight.", kw: "task manager not responding kill end task crash freeze" },
  { c: "apps", t: "Juggle all your open windows", win: "Win + Tab (Task View)", m: ["⌃", "↑"], how: "⌃↑ spreads every window out so you can click the one you want; ⌃↓ shows just the current app's windows; ⌘Tab flips between apps. On the trackpad, swipe up with three or four fingers.", kw: "mission control task view alt tab expose windows multitask" },
  { c: "system", t: "Type an emoji or accented letter", win: "Win + .", m: ["fn", "E"], how: "fn E (or Control-Command-Space) opens the emoji picker. For accents, hold down a letter for a popup, or press fn twice for the full Character Viewer.", kw: "emoji accent special character symbol é" },
  { c: "files", t: "Peek inside a file instantly", win: "-", m: ["Space"], how: "Click a file once in Finder and tap the Space bar to preview it full-size, no app needed. Tap Space again to close. There's no Windows equivalent; this one's a gift.", kw: "quick look preview view peek" },
  { c: "files", t: "Move a file instead of copying it", win: "Ctrl + X then Ctrl + V", m: ["⌘", "C", "then", "⌥", "⌘", "V"], how: "Copy the file with ⌘C, go to the destination, then press Option-Command-V to move it there. That's the Mac's version of cut-and-paste for files.", kw: "cut paste move relocate" },
  { c: "apps", t: "Snap windows side by side", win: "Win + Arrow", m: "drag to a screen edge", how: "Drag a window against the left or right edge to fill half the screen, or into a corner for a quarter. The Window ▸ Move & Resize menu has more layouts. (Proper tiling arrived in macOS 15.)", kw: "snap tile split half window arrange resize" },
  { c: "text", t: "The Delete key only deletes backward", win: "The Delete key", m: ["fn", "⌫"], how: "On a Mac, the key labelled Delete behaves like the Windows Backspace. To erase the character ahead of the cursor, press fn+Delete (or Control+D).", kw: "forward delete backspace del key" },
  { c: "system", t: "Lock the screen or log out", win: "Win + L", m: ["⌃", "⌘", "Q"], how: "⌃⌘Q locks your Mac right away. To sign out completely, press ⇧⌘Q.", kw: "lock sign out log off secure" },
  { c: "system", t: "Change a setting", win: "Win + I / Settings", m: "Apple menu ▸ System Settings", how: "Click the Apple logo at the very top-left, then System Settings, the Mac's version of the Control Panel. Search the sidebar to jump straight to what you need.", kw: "settings control panel preferences configure options" },
  { c: "files", t: "Where did my download go?", win: "Downloads folder", m: "Dock & Finder sidebar", how: "Downloads land in the Downloads folder, on the right side of the Dock and in every Finder window's sidebar. Screenshots save to the Desktop by default; change that under Options in the ⌘⇧5 toolbar.", kw: "downloads folder save location find file lost missing" },
];

export const catName = (id: string) => CATS.find((c) => c.id === id)?.name ?? id;
