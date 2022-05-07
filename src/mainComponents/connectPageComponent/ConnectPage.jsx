import React, { useEffect, useState } from "react";
import videosr from "../../styles/videos/heroWalking.mp4";
const ConnectPage = () => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
    setOpacity(1);
    return () => {
      setOpacity(0);
    };
  }, []);

  return (
    <div className="connect" style={{ opacity: `${opacity}` }}>
      <h1 className="logo">Portfolio</h1>
      <ul className="connect_links">
        <li>
          <a
            href="https://docs.google.com/document/d/1Ib8fcVEwBZkPbYGxaiinklCVOFpSoUs7RKY_7aIa1Ic/edit"
            target="_blank"
          >
            CV
          </a>
        </li>
        <li>
          <a
            href="https://accounts.google.com/b/0/AddMailService"
            target="_blank"
          >
            Gmail
          </a>
        </li>
        <li>
          <a href="https://github.com/al-amiir" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/al-amiir/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCVQzuaxXlqa8xgwA5xAQY4Q"
            target="_blank"
          >
            Youtube
          </a>
        </li>
      </ul>

      <h1 className="hire">Hire a hero </h1>
      <span className="overlay"></span>
      <video
        className="hero"
        autoPlay
        loop
        muted
        playsInline
        src={videosr}
      ></video>
    </div>
  );
};

export default ConnectPage;
