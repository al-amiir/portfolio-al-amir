import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import SplineFace from "../components/Spline-Face";
import TwoLines from "../components/TwoLines";
const Home = () => {
  const [opacity, setOpacity] = useState(0);
  const [translateX, setTranslateX] = useState("0vw");

  useEffect(() => {
    setOpacity(1);
    setTranslateX("0vw");
    return () => {
      setOpacity(0);
      setTranslateX("-100vw");
    };
  }, []);

  return (
    <div
      className="home"
      style={{ opacity: `${opacity}`, transform: `translateX(${translateX})` }}
    >
      {/* <SplineFace /> */}
      <Menu />
      <TwoLines />
    </div>
  );
};

export default Home;
