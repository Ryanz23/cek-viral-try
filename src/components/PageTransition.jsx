import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 1, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "expo.in" }
    );
  }, [location.pathname]);

  return <div ref={ref}>{children}</div>;
};

export default PageTransition;
