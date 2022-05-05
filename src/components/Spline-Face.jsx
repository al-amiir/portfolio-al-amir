import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";

const SplineFace = () => {
  return (
    // <iframe
    //   className="splineFace"
    //   src="https://my.spline.design/daftpunkcopy-ab14b67f0ce15f11d875bb2bd6f9bde0/"
    //   frameBorder="0"
    // ></iframe>

    <Spline
      className="splineFace"
      scene="https://prod.spline.design/dxTS4avNYKHiw6rE/scene.spline"
    />
  );
};

export default SplineFace;
