import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const ScrollButton = () => {
  useEffect(() => {
    anime({
      targets: ".button_scroll span",
      translateX: ["13px", "-13px"],
      opacity: [1, 0],
      loop: true,
      easing: "linear",
      duration: 2000,
    });
  }, []);

  return (
    <div className="button_scroll">
      <span></span>
    </div>
  );
};

export default ScrollButton;
