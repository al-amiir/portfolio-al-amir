import React, { useEffect, useState } from "react";
import Logo from "../../components/logo/Logo";
import videosr from "../../styles/videos/heroWalking.mp4";
import ConnectLinks from "./ConnectLinks";
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
      <Logo />
      <ConnectLinks />
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
