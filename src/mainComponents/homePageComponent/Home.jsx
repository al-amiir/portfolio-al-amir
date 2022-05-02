import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import SplineFace from "../../components/Spline-Face";
import TwoLines from "./TwoLines";
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
      <span className="logo">portfolio</span>
      <SplineFace />
      <TwoLines />

      <Link className="button_story" to="/story">
        <span>my story</span>
        <img src="https://img.icons8.com/ios/35/ffffff/double-right.png" />
      </Link>
      <span className="copyRight">2022 alamir copy righ</span>
    </div>
  );
};

export default Home;
