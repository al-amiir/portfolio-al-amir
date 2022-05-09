import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import ButtonNext from "../../components/nextPageButton/ButtonNext";
import TwoLines from "./TwoLines";
import dImgae from "../../styles/pics/3d.png";
import Logo from "../../components/logo/Logo";
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
    <React.Suspense fallback={<Loader />}>
      <div className="home" style={{ opacity: `${opacity}` }}>
        <Logo />
        <img src={dImgae} className="home_3dImage" alt="" />
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
