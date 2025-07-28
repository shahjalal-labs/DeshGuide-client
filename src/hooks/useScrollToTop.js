/* import { useEffect } from "react";
import { useLocation } from "react-router";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional smooth scrolling
    });
  }, [pathname]);
};

export default useScrollToTop; */

import { useEffect } from "react";
import { useLocation } from "react-router";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Fallback for immediate scroll if smooth doesn't work
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);
};

export default useScrollToTop;
