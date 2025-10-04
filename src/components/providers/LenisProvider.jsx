"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      lerp: 0.1,
      prevent: (node) => {
        // Prevent Lenis from interfering with navbar and interactive elements
        return node.classList.contains('navbar') ||
          node.classList.contains('nav-link') ||
          node.tagName === 'BUTTON' ||
          node.tagName === 'A' ||
          node.closest('nav');
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
