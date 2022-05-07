import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const SplineFace = () => {
  const [scene, setScene] = useState(
    "https://prod.spline.design/A0f1JCKoU5mI1n87/scene.splinecode"
  );
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 500) {
      setScene("https://prod.spline.design/W0BvJnwoy4sZlxgh/scene.splinecode");
    } else {
      setScene("https://prod.spline.design/A0f1JCKoU5mI1n87/scene.splinecode");
    }
  }, []);

  return <Spline className="splineFace" scene={scene} />;
};

export default SplineFace;
