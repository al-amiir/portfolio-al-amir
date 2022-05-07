import React from "react";
// Videos
import pirateVideo from "../../styles/videos/pirate.mp4";
import innovationVideo from "../../styles/videos/innovation.mp4";
import runVideo from "../../styles/videos/run.mp4";
import studingVideo from "../../styles/videos/studing.mp4";
import codingVideo from "../../styles/videos/coding.mp4";

const StoryTape = () => {
  let storyTapeContent = [
    {
      videoSrc: pirateVideo,
      text: "I was a marine engineer, Graduated in 2018, and worked for a while.",
    },
    {
      videoSrc: innovationVideo,
      text: "But deeply, I had a passion for coding and designing.",
    },
    {
      videoSrc: runVideo,
      text: "In 2020 I decided to finally follow my passion.",
    },
    {
      videoSrc: studingVideo,
      text: "So I started to study, practice, read docs and deploy.",
    },
    {
      videoSrc: codingVideo,
      text: "Now I'm doing what I wanted to be, a web developer and a designer",
    },
  ];
  return (
    <div className="story_tape">
      <p className="story_tape-p">hover on videos</p>
      {/* Story Parts  */}
      {storyTapeContent.map((content, i) => (
        <div className="story_tape-parts" key={i}>
          {/* Video */}
          <video loop muted autoPlay>
            <source src={content.videoSrc} type="video/mp4" />
          </video>
          {/* Text  */}
          <div className="story_tape-parts-text">
            <span>
              {content.text} {i === 4 ? <span>&hearts;.</span> : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryTape;
