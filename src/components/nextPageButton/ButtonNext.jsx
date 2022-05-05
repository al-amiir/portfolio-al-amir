import React from "react";
import { Link } from "react-router-dom";
import "./styles/buttonNext.css";
const ButtonNext = ({ to, name }) => {
  return (
    <Link className="button_next" to={to}>
      <span>{name}</span>
      <img src="https://img.icons8.com/ios/50/ffffff/long-arrow-right.png" />{" "}
    </Link>
  );
};

export default ButtonNext;
