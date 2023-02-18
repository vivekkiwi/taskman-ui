/* eslint-disable consistent-return */
import { useEffect, useLayoutEffect } from "react";

export const useOnEscape = (handler, active = true) => {
  useEffect(() => {
    if (!active) return;
    const listener = (event) => {
      // check if key is an Escape
      if (event.key === "Escape") handler(event);
    };
    document.addEventListener("keyup", listener);

    return () => {
      if (!active) return;
      document.removeEventListener("keyup", listener);
    };
  }, [handler, active]);
};

export const useRepositionOnResize = (handler, active = true) => {
  useEffect(() => {
    if (!active) return;
    const listener = () => {
      handler();
    };

    window.addEventListener("resize", listener);

    return () => {
      if (!active) return;
      window.removeEventListener("resize", listener);
    };
  }, [handler, active]);
};

export const useRepositionOnScroll = (handler, active = true) => {
  useEffect(() => {
    if (!active) return;
    const listener = () => {
      handler();
    };

    document.addEventListener("scroll", listener);

    return () => {
      if (!active) return;
      document.removeEventListener("scroll", listener);
    };
  }, [handler, active]);
};

export const useOnClickOutside = (ref, handler, active = true) => {
  useEffect(() => {
    if (!active) return;
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      const refs = Array.isArray(ref) ? ref : [ref];

      let contains = false;
      refs.forEach((r) => {
        if (!r.current || r.current.contains(event.target)) {
          contains = true;
        }
      });
      event.stopPropagation();
      if (!contains) handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      if (!active) return;
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, active]);
};

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const useOnEvents = (
  triggerRef,
  on,
  ariaId,
  { togglePopup, onMouseEnter, onMouseLeave }
) => {
  const onAsArray = Array.isArray(on) ? on : [on];

  useEffect(() => {
    if (!triggerRef?.current || !onAsArray.length) return;
    triggerRef.current.setAttribute("aria-describedby", ariaId);

    for (let i = 0, len = onAsArray.length; i < len; i += 1) {
      switch (onAsArray[i]) {
        case "click":
          triggerRef.current.addEventListener("click", togglePopup);
          break;
        case "hover":
          triggerRef.current.addEventListener("mouseenter", onMouseEnter);
          triggerRef.current.addEventListener("mouseleave", onMouseLeave);
          break;
        case "focus":
          triggerRef.current.addEventListener("focus", onMouseEnter);
          triggerRef.current.addEventListener("blur", onMouseLeave);
          break;
        default:
      }
    }
  }, [!!triggerRef?.current, togglePopup, onMouseEnter, onMouseLeave]);
};
