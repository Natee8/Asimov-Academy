import cursorPointerSrc from "@/assets/icons/curorClick.svg";
import cursorDefaultSrc from "@/assets/icons/cursor.svg";

export const CURSOR_SRC_DEFAULT = cursorDefaultSrc;
export const CURSOR_SRC_POINTER = cursorPointerSrc;

export const DISPLAY_PX = 36;

const HOTSPOT_DEFAULT = { nx: 78 / 375, ny: 10 / 375 };
const HOTSPOT_POINTER = { nx: 118 / 375, ny: 12 / 375 };

export function cursorHotspotPx(pointer: boolean): { x: number; y: number } {
  const h = pointer ? HOTSPOT_POINTER : HOTSPOT_DEFAULT;
  return { x: h.nx * DISPLAY_PX, y: h.ny * DISPLAY_PX };
}
