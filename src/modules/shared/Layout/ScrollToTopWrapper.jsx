// src/modules/shared/Layout/ScrollToTopWrapper.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTopWrapper = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Remove for instant scroll
    });
  }, [pathname]);

  return children;
};

export default ScrollToTopWrapper;
