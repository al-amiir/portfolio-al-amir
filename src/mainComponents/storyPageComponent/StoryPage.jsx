import React, { useState, useEffect } from "react";
import ScrollButton from "../../components/ScrollButton";
import StoryTape from "./StoryTape";
import alamirPhoto from "../../styles/pics/amir.png";
import arrowImage from "../../styles/pics/arrow.png";

const Story = () => {
  const [opacity, setOpacity] = useState(0);
  // const [translateX, setTranslateX] = useState("100vw");
  let offset = 0;

  useEffect(() => {
    setOpacity(1);
    // setTranslateX("0vw");
    return () => {
      setOpacity(0);
      // setTranslateX("100vw");
    };
  }, []);

  useEffect(() => {
    const body = document.body,
      scrollWrap = document.querySelector(".story_container"),
      width = scrollWrap.getBoundingClientRect().width,
      speed = 0.02;

    body.style.width = Math.floor(width) + "px";
    body.style.height = "100vh";

    function smoothScroll() {
      offset += (window.pageXOffset - offset) * speed;
      let scroll = "translateX(-" + offset + "px) translateZ(0)";
      scrollWrap.style.transform = scroll;

      requestAnimationFrame(smoothScroll);
    }
    smoothScroll();

    // body.onmousemove = (e) => {
    //   console.log(e.pageY * 0.1);
    //   document.querySelector(".cursor").style.top = `${e.pageY}px`;
    //   document.querySelector(".cursor").style.left = `${e.pageX}px`;
    // };
    //  <div className="cursor"></div>
  }, []);

  return (
    <div className="story" style={{ opacity: `${opacity}` }}>
      {/* Story Container  */}
      <div className="story_container">
        {/* Story Text Name And Intro  */}
        <div className="story_text">
          <h1 className="story_text-header">AL Amir</h1>
          <p className="story_text-subHeader">
            Web Developer and Creative designer
          </p>
          <p className="story_text-intro">
            I'm 26 yrs old, Egyptian living in Alexandria Egypt, Loves to
            combine between programming and art, Always practicing, Reading docs
            and Updating my skills, This is my{" "}
            <strong style={{ fontSize: "1.2rem", letterSpacing: "1px" }}>
              Life Story
            </strong>{" "}
          </p>
        </div>

        {/* Story Author's Photo And Story Tape Of Videos  */}
        <div>
          <div className="story_photo">
            <img src={alamirPhoto} alt="Al Amir's Photo" />
            {/* Skills  */}
            <div className="story_photo-text">
              <span>JavaScript</span>
              <span>SASS</span>
              <span>Css</span>
              <span>Node</span>
              <span>Rive</span>
              <span>graphQL</span>
              <span>React</span>
              <span>Spline 3D</span>
              <span>MongoDB</span>
              <span>FireStore</span>
              <span>HTML</span>
              <span>Angular</span>
              <span>Express</span>
              <span>REST API</span>
              <span>Async</span>
            </div>
          </div>
          {/* Story Tape */}
          <div className="story_tape-box">
            <img
              src={arrowImage}
              alt="arrow image"
              className="story_tape-box-image"
            />
            <StoryTape />
          </div>
        </div>
      </div>
      {/* Scroll Button  */}
      <ScrollButton />
    </div>
  );
};

export default Story;
