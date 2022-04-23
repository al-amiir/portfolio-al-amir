import React, { useState, useEffect } from "react";
import ScrollButton from "../components/ScrollButton";
import StoryTape from "../components/storyPageComponent/StoryTape";
import alamirPhoto from "../styles/pics/alamir.png";
const Story = () => {
  let offset = 0;
  useEffect(() => {
    const body = document.body,
      scrollWrap = document.querySelector(".story_container"),
      width = scrollWrap.getBoundingClientRect().width - 1,
      speed = 0.01;

    body.style.width = Math.floor(width) + "px";
    body.style.height = "100vh";

    function smoothScroll() {
      offset += (window.pageXOffset - offset) * speed;
      console.log(offset);
      var scroll = "translateX(-" + offset + "px) translateZ(0)";
      scrollWrap.style.transform = scroll;

      requestAnimationFrame(smoothScroll);
    }
    smoothScroll();

    body.onmousemove = (e) => {
      console.log(e.pageY * 0.1);
      document.querySelector(".cursor").style.top = `${e.pageY}px`;
      document.querySelector(".cursor").style.left = `${e.pageX}px`;
    };
  }, []);

  return (
    <div>
      <div className="story_container">
        {/* <div className="cursor"></div> */}
        <div className="story">
          <div className="story_text">
            <h1 className="story_text-header">AL Amir</h1>
            <p className="story_text-intro">Web Developer and Creative designer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod! Aspernatur blanditiis, sit rerum earum officiis odit deserunt natus delectus iusto? Accusantium quia rem molestias hic iure architecto ipsam atque.</p>
          </div>
          <div>
            <div className="story_photo">
              <img src={alamirPhoto} alt="" />
              <div className="story_photo-text">
                <span>JavaScript</span>
                <span>SASS</span>
                <span>Css</span>
                <span>Node</span>
                <span>React</span>
                <span>graphQL</span>
                <span>React</span>
                <span>Spline 3D</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>HTML</span>
                <span>Angular</span>
                <span>Express</span>
                <span>REST API</span>
                <span>Async</span>
              </div>
            </div>
            <div style={{ transform: `skewX(${offset * 10}deg)` }}>
              <StoryTape />
            </div>
          </div>
        </div>
      </div>

      <ScrollButton />
    </div>
  );
};

export default Story;
