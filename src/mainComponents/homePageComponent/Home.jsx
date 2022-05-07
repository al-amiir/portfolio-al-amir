import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ButtonNext from "../../components/nextPageButton/ButtonNext";
import TwoLines from "./TwoLines";

const SplineFace = React.lazy(() => import("../../components/Spline-Face"));
const Home = () => {
  const [opacity, setOpacity] = useState(0);
  const [loaderDisplay, setLoaderDisplay] = useState("block");
  useEffect(() => {
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";

    setTimeout(() => {
      setLoaderDisplay("none");
      setOpacity(1);
    }, 10000);
    return () => {
      setOpacity(0);
    };
  }, []);

  return (
    <React.Suspense fallback={<Loader />}>
      <div style={{ display: `${loaderDisplay}` }}>
        <Loader />
      </div>
      <div className="home" style={{ opacity: `${opacity}` }}>
        <span className="logo">portfolio</span>
        {/* <SplineFace /> */}
        <TwoLines />
        <div className="home_navigation">
          <ButtonNext to="/story" name="My Story" />
        </div>
        <span className="copyRight">
          &copy; Copyright 2022 Al-Amir all rights reserved
        </span>
      </div>
    </React.Suspense>
  );
};

export default Home;
