import React, { useState } from "react";
import StoryTape from "../components/storyPageComponent/StoryTape";
import alamirPhoto from "../styles/pics/alamir.png";
const Story = () => {
  window.scrollBy({
    // top: 100, // could be negative value
    right: 100,
    behavior: "smooth",
  });
  return (
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
        <StoryTape />
      </div>
    </div>
  );
};

export default Story;
