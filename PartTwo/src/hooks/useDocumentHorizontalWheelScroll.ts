import { useEffect } from "react";

const SELECTOR = "[data-wheel-scroll-x]";

export function useDocumentHorizontalWheelScroll() {
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!(e.target instanceof Element)) return;
      const el = e.target.closest(SELECTOR);
      if (!(el instanceof HTMLElement)) return;
      if (el.scrollWidth <= el.clientWidth + 1) return;

      const dy = e.deltaY;
      const dx = e.deltaX;
      if (Math.abs(dy) <= Math.abs(dx)) return;

      e.preventDefault();
      el.scrollLeft += dy;
    };

    document.addEventListener("wheel", onWheel, { passive: false, capture: true });
    return () => document.removeEventListener("wheel", onWheel, true);
  }, []);
}
