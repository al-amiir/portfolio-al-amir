import React, { useState } from "react";
import pirateVideo from "../../styles/gifs/pirate.mp4";
import innovationVideo from "../../styles/gifs/innovation.mp4";
import runVideo from "../../styles/gifs/run.mp4";
import studingVideo from "../../styles/gifs/studing.mp4";
import codingVideo from "../../styles/gifs/coding.mp4";

const StoryTape = () => {
  const [storyPartIndex, setstoryPartIndex] = useState(0);

  function resetStoryParts(storyPartsWidth) {
    document.querySelector(".story_tape").style.width = `min-content`;
    document.querySelectorAll(".story_tape-parts").forEach((part) => {
      part.style.width = `${storyPartsWidth}`;
      part.style.transform = "scale(.9)";
      part.style.height = "130px";
    });
    document.querySelectorAll(".story_tape-parts p").forEach((part) => {
      part.style.display = "none";
    });
  }
  function displayOneStoryPart(e) {
    resetStoryParts("0vw");
    setstoryPartIndex(+e.target.dataset.index);
    let sp = document.querySelectorAll(".story_tape-parts")[+e.target.dataset.index];
    sp.style.transform = "scale(1)";
    sp.style.width = "100vw";
    sp.style.height = "80vh";
    document.querySelectorAll(".story_tape-parts p")[+e.target.dataset.index].style.display = "block";
  }
  function closeDisplayedStoryPart() {
    resetStoryParts("300px");
    setTimeout(() => {
      document.querySelectorAll(".story_tape-parts")[storyPartIndex].scrollIntoView({ behavior: "smooth", inline: "start" });
    }, 300);
  }

  return (
    <div className="story_tape">
      {/* pirate video  */}
      <div className="story_tape-parts">
        {/* <div onClick={displayOneStoryPart} data-index="0" className="gifBlock"></div> */}
        <video autoPlay loop muted playsInline>
          <source src={pirateVideo} type="video/mp4" />
        </video>
        {/* <p>I graduated as a marine engineer from faculty of engineering </p> */}
        {/* <button onClick={closeDisplayedStoryPart}>close</button> */}
      </div>

      {/* innovation video */}
      <div className="story_tape-parts">
        {/* <div onClick={displayOneStoryPart} data-index="1" className="gifBlock"></div> */}
        <video autoPlay loop muted playsInline>
          <source src={innovationVideo} type="video/mp4" />
        </video>
        {/* <p>I always had a passion for coding and art</p> */}
        {/* <button onClick={closeDisplayedStoryPart}>close</button> */}
      </div>
      {/* run video  */}
      <div className="story_tape-parts">
        {/* <div onClick={displayOneStoryPart} data-index="2" className="gifBlock"></div> */}
        <video autoPlay loop muted playsInline>
          <source src={runVideo} type="video/mp4" />
        </video>
        {/* <p>After a long time of thinking, I made my decission to shift my career to web development</p> */}
        {/* <button onClick={closeDisplayedStoryPart}>close</button> */}
      </div>
      {/* studing video */}
      <div className="story_tape-parts">
        {/* <div onClick={displayOneStoryPart} data-index="3" className="gifBlock"></div> */}
        <video autoPlay loop muted playsInline>
          <source src={studingVideo} type="video/mp4" />
        </video>
        {/* <p>in 2020 i started to study, coding and practitcing on web</p> */}
        {/* <button onClick={closeDisplayedStoryPart}>close</button> */}
      </div>
      {/* coding */}
      <div className="story_tape-parts">
        {/* <div onClick={displayOneStoryPart} data-index="4" className="gifBlock"></div> */}
        <video autoPlay loop muted playsInline>
          <source src={codingVideo} type="video/mp4" />
        </video>
        {/* <p>Now im a web developer </p> */}
        {/* <button onClick={closeDisplayedStoryPart}>close</button> */}
      </div>
    </div>
  );
};

export default StoryTape;
