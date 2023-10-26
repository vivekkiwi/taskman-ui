import React, { useState, useEffect } from "react";
import { throttle } from "@src/utils/util";

const ScrollDirectionSubscription = (Component) => {
  return function ScrollDirection(props) {
    const [scrollYPosition, setScrollYPosition] = useState(window.scrollY);
    const [isScrollUp, setIsScrollUp] = useState(false);

    const handleScroll = throttle(() => {
      if (Math.abs(scrollYPosition - window.scrollY) > 1) {
        if (scrollYPosition < window.scrollY) {
          setIsScrollUp(false);
        } else if (scrollYPosition > window.scrollY) {
          setIsScrollUp(true);
        }
      }
      setScrollYPosition(window.scrollY);
    }, 250);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return <Component {...props} isScrollUp={isScrollUp} />;
  };
};

export default ScrollDirectionSubscription;
