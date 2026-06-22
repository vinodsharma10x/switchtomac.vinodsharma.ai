// The ten Mac trackpad gestures, as data. Shared by the GesturesGrid
// component (which adds a diagram per id) and the installable skill, so the
// text stays in one place.
export interface Gesture {
  id: string;
  name: string;
  instruction: string;
  use: string;
}

export const GESTURES: Gesture[] = [
  {
    id: "tap-to-click",
    name: "Tap to click",
    instruction: "Tap with one finger",
    use: "A light tap clicks, no pressing down. Switch it on in Trackpad settings if it is not already.",
  },
  {
    id: "right-click",
    name: "Right-click",
    instruction: "Tap with two fingers",
    use: "This is your right-click. It opens the same menu the right mouse button did.",
  },
  {
    id: "scroll",
    name: "Scroll",
    instruction: "Two fingers, up or down",
    use: "Scroll any page, list, or document.",
  },
  {
    id: "zoom",
    name: "Zoom in or out",
    instruction: "Pinch or spread two fingers",
    use: "Zoom into photos, maps, and PDFs.",
  },
  {
    id: "swipe-pages",
    name: "Swipe between pages",
    instruction: "Two fingers, left or right",
    use: "Go back and forward, like the browser arrows.",
  },
  {
    id: "switch-apps",
    name: "Switch desktops and apps",
    instruction: "Three or four fingers, sideways",
    use: "Slide between full-screen apps and desktops.",
  },
  {
    id: "mission-control",
    name: "Mission Control",
    instruction: "Swipe up, three or four fingers",
    use: "See every open window laid out at once.",
  },
  {
    id: "app-expose",
    name: "App Exposé",
    instruction: "Swipe down, three or four fingers",
    use: "Spread out all the windows of the app you are in.",
  },
  {
    id: "show-desktop",
    name: "Show desktop",
    instruction: "Spread thumb and three fingers",
    use: "Clear everything out of the way to reach your desktop.",
  },
  {
    id: "show-all-apps",
    name: "Show all apps",
    instruction: "Pinch thumb and three fingers",
    use: "Open the grid of all your installed apps.",
  },
];
