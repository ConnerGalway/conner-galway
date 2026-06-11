import { useEffect, useRef } from "react";

/**
 * Adds the `.revealed` class to the returned ref element when it enters
 * the viewport. Content is visible by default (no opacity:0 gating).
 * Works in headless renderers and respects prefers-reduced-motion via CSS.
 */
export function useReveal<T extends HTMLElement>(margin = "-60px") {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already revealed (HMR / re-mount)
    if (el.classList.contains("revealed")) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          obs.disconnect();
        }
      },
      { rootMargin: margin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [margin]);

  return ref;
}
