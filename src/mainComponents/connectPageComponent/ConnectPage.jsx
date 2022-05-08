import React, { useEffect, useState } from "react";
import videosr from "../../styles/videos/heroWalking.mp4";
const ConnectPage = () => {
  const [opacity, setOpacity] = useState(0);
  const [connectionArray, setConnectionArray] = useState([
    {
      link: "https://docs.google.com/document/d/1Ib8fcVEwBZkPbYGxaiinklCVOFpSoUs7RKY_7aIa1Ic/edit",
      name: "CV",
    },
    {
      link: "https://accounts.google.com/b/0/AddMailService",
      name: "GMAIL",
    },
    {
      link: "https://github.com/al-amiir",
      name: "Github",
    },
    {
      link: "https://www.linkedin.com/in/al-amiir/",
      name: "LinkedIn",
    },
    {
      link: "https://www.youtube.com/channel/UCVQzuaxXlqa8xgwA5xAQY4Q",
      name: "Youtube",
    },
  ]);
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
        {connectionArray.map((li, i) => (
          <li key={i}>
            <a href={li.link} target="_blank">
              {li.name}
            </a>
          </li>
        ))}
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
