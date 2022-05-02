import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import SplineFace from "../../components/Spline-Face";
import TwoLines from "../../components/TwoLines";
const Home = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";

    setOpacity(1);
    return () => {
      setOpacity(0);
    };
  }, []);

  return (
    <div className="home" style={{ opacity: `${opacity}` }}>
      {/* <SplineFace /> */}
      <Menu />
      <TwoLines />
    </div>
  );
};

export default Home;
