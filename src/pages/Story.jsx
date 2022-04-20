import React, { useState } from "react";

const Story = () => {
  const [storyPartIndex, setstoryPartIndex] = useState(0);
  let sp;
  function resetStoryParts(storyPartsWidth) {
    document.querySelector(".story").style.width = `min-content`;
    document.querySelectorAll(".story-parts").forEach((part) => {
      part.style.width = `${storyPartsWidth}`;
      part.style.transform = "scale(.9)";
      part.style.height = "300px";
    });
    console.log(sp);
  }
  function displayOneStoryPart(e) {
    resetStoryParts("0vw");
    setstoryPartIndex(+e.target.dataset.index);
    sp = document.querySelectorAll(".story-parts")[+e.target.dataset.index];
    sp.style.transform = "scale(1)";
    sp.style.width = "100vw";
    sp.style.height = "80vh";
    console.log(sp);
  }
  function closeDisplayedStoryPart() {
    resetStoryParts("400px");
    // setTimeout(() => {
    //   sp.scrollIntoView({ behavior: "smooth", inline: "start" });
    // }, 300);
    console.log(sp);
  }

  return (
    <div className="story">
      <div className="story-parts" onClick={displayOneStoryPart} data-index="0">
        <div data-index="0" className="gifBlock"></div>
        <iframe src="https://giphy.com/embed/3o7aCTXVcHJgJ4yoeI" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
      <div className="story-parts">
        <div onClick={displayOneStoryPart} data-index="1" className="gifBlock"></div>
        {/* <iframe src="https://giphy.com/embed/3o6fJgEOrF1lky8WFa" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
        <iframe src="https://giphy.com/embed/5ug3SS4tRzs88" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>

      <div className="story-parts">
        <div onClick={displayOneStoryPart} data-index="2" className="gifBlock"></div>
        <iframe src="https://giphy.com/embed/Wt7Mwj8SyC9Y2WcdRO" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>

      <div className="story-parts">
        <div onClick={displayOneStoryPart} data-index="3" className="gifBlock"></div>
        <iframe src="https://giphy.com/embed/fhAwk4DnqNgw8" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
      {/* <div className="story-parts">
        <div onClick={displayOneStoryPart} data-index="4" className="gifBlock"></div>
        <iframe src="https://giphy.com/embed/RbDKaczqWovIugyJmW" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div> */}
      <div onClick={displayOneStoryPart} className="story-parts" data-index="4">
        <div onClick={displayOneStoryPart} data-index="4" className="gifBlock"></div>
        <iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
      <button onClick={closeDisplayedStoryPart}>close</button>
    </div>
  );
};

export default Story;
