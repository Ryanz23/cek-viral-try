import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, },
      { opacity: 1, duration: 0.3, ease: "expo.in" }
    );
  }, [location.pathname]);

  return <div ref={ref}>{children}</div>;
};

export default PageTransition;
