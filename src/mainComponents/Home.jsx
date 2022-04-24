import React, { Suspense } from "react";
import Menu from "../components/Menu";
import SplineFace from "../components/Spline-Face";
import TwoLines from "../components/TwoLines";
const Home = () => {
  return (
    <div className="home">
      <SplineFace />
      <Menu />
      <TwoLines />
    </div>
  );
};

export default Home;
