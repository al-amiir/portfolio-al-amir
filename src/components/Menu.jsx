import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ setDisplayedLocation }) => {
  const [display, setDisplay] = useState(false);
  function handleDisplayMenu() {
    // setTimeout(() => {
    setDisplay((prev) => !prev);
    // }, seconds);
  }

  return (
    <div className="menu">
      <img
        onClick={handleDisplayMenu}
        src="https://img.icons8.com/ios-filled/50/000000/stripped-patterns-2.png"
      />
      <div
        className="menu-content"
        style={{
          clipPath: `${display ? "inset(0 0 0 0)" : "inset(0 50% 0 50%)"}`,
        }}
      >
        <Link to="/">
          <button>
            <span>H</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
          </button>
        </Link>
        <Link to="/story">
          <button>
            <span>S</span>
            <span>T</span>
            <span>O</span>
            <span>R</span>
            <span>Y</span>
          </button>
        </Link>
        <Link to="work">
          <button>
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>K</span>
          </button>
        </Link>
        <Link to="connect">
          <button>
            <span>T</span>
            <span>A</span>
            <span>L</span>
            <span>K</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
