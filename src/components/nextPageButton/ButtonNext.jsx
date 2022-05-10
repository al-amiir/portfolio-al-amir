import React from "react";
import { Link } from "react-router-dom";
import "./styles/buttonNext.css";
const ButtonNext = ({ to, name }) => {
  return (
    <Link className="button_next" to={to}>
      <span className="button_next-text">{name}</span>
      <img src="https://img.icons8.com/ios/50/f5deb3/long-arrow-right.png" />{" "}
    </Link>
  );
};

export default ButtonNext;
