import React from "react";
import "./styles/loader.css";
const Loader = () => {
  return (
    <div className="loader_background">
      <div class="wrapper">
        <div class="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    // <div className="loader">
    //   <div className="loader_body">
    //     <span>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </span>
    //     <div className="loader_base">
    //       <span></span>
    //       <div className="loader_face"></div>
    //     </div>
    //   </div>
    //   <div className="longfazers">
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //   </div>
    //   <h1 className="loader_text">Loading...</h1>
    // </div>
  );
};

export default Loader;
