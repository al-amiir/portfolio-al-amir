import React, { useState } from "react";

const Menu = () => {
  const [display, setDisplay] = useState(false);
  function handleDisplayMenu() {
    setDisplay((prev) => !prev);
  }

  return (
    <div className="menu">
      <img onClick={handleDisplayMenu} src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/ffffff/external-menu-user-interface-tanah-basah-detailed-outline-tanah-basah.png" />
      <div className="menu-content" style={{ clipPath: `${display ? "inset(0 0 0 0)" : "inset(0 50% 0 50%)"}` }}>
        <button>
          <span>I</span>
          <span>N</span>
          <span>E</span>
          <span>D</span>
        </button>
        <button>
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </button>
        <button>
          <span>W</span>
          <span>O</span>
          <span>R</span>
          <span>K</span>
        </button>
        <button>
          <span>T</span>
          <span>A</span>
          <span>L</span>
          <span>K</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
