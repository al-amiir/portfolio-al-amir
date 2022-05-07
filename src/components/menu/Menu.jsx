import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/menu.css";

const Menu = ({ setGreyFilter }) => {
  const [display, setDisplay] = useState(false);
  const [buttonColor, setButtonColor] = useState("#158744");

  function handleDisplayMenu(seconds = 0) {
    setButtonColor((prev) => (prev === "#158744" ? "#a30000" : "#158744"));
    setGreyFilter((prev) =>
      prev === "grayscale(0)" ? "grayscale(1)" : "grayscale(0)"
    );
    setTimeout(() => {
      setDisplay((prev) => !prev);
    }, seconds);
  }

  return (
    <div className="menu">
      <div onClick={handleDisplayMenu} className="menu_button">
        <span style={{ backgroundColor: `${buttonColor}` }}></span>
        <span style={{ backgroundColor: `${buttonColor}` }}></span>
        <span style={{ backgroundColor: `${buttonColor}` }}></span>
        <span style={{ backgroundColor: `${buttonColor}` }}></span>
      </div>
      <div
        className="menu-content"
        style={{
          clipPath: `${display ? "inset(0 0 0 0)" : "inset(0 50% 0 50%)"}`,
        }}
      >
        <Link
          to="/"
          onClick={() => {
            handleDisplayMenu(200);
          }}
        >
          <button>
            <span>H</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
          </button>
        </Link>
        <Link
          to="/story"
          onClick={() => {
            handleDisplayMenu(200);
          }}
        >
          <button>
            <span>S</span>
            <span>T</span>
            <span>O</span>
            <span>R</span>
            <span>Y</span>
          </button>
        </Link>
        <Link
          to="work"
          onClick={() => {
            handleDisplayMenu(200);
          }}
        >
          <button>
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>K</span>
          </button>
        </Link>
        <Link
          to="connect"
          onClick={() => {
            handleDisplayMenu(200);
          }}
        >
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
