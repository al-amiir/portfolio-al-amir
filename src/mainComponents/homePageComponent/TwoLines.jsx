import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link } from "react-router-dom";

const TwoLines = () => {
  function movingLines(target, from, to) {
    anime({
      targets: target,
      translateX: [from, to],
      loop: true,
      direction: "alternate",
      easing: "linear",
      duration: 40000,
    });
  }
  useEffect(() => {
    movingLines(".twoLines-one", "0px", "-5000px");
    movingLines(".twoLines-two", "-5000px", "0px");
  }, []);

  return (
    <div className="twoLines">
      <p className="twoLines-one">
        <span>
          PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER_PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER_PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER_PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER_PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER
        </span>
      </p>
      <p className="twoLines-two">
        <span>
          PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER_PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER_PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER_PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER_PORTFOLIO_WEBDEVELOPER_EGYPTIAN_CREATIVEDESINGNER
        </span>
      </p>
    </div>
  );
};

export default TwoLines;
