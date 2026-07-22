"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_NAVIGATION_QUERY =
  "(min-width: 1024px) and (hover: hover) and (pointer: fine)";

export function useNavigationMode(onReturnToTop?: () => void) {
  const [compact, setCompact] = useState(false);
  const callback = useRef(onReturnToTop);

  useEffect(() => {
    callback.current = onReturnToTop;
  }, [onReturnToTop]);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_NAVIGATION_QUERY);
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setCompact((current) => {
          const next = media.matches && (current ? window.scrollY >= 50 : window.scrollY > 100);
          if (current && !next) callback.current?.();
          return next;
        });
      });
    };

    const syncListeners = () => {
      window.removeEventListener("scroll", update);
      if (media.matches) window.addEventListener("scroll", update, { passive: true });
      update();
    };

    syncListeners();
    media.addEventListener("change", syncListeners);

    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener("change", syncListeners);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return compact;
}
