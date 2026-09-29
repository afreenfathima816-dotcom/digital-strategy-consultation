"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Eases wheel/trackpad scrolling and in-page anchor jumps. Skipped for reduced-motion users.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      anchors: { offset: -64 }, // clear the sticky nav
      allowNestedScroll: true, // let the testimonial slider scroll natively
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
