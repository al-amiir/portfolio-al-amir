import React from "react";
import { Link } from "react-router-dom";

import "./styles/logo.css";
const Logo = () => {
  return (
    <Link to="/">
      <span className="logo">portfolio</span>
    </Link>
  );
};

export default Logo;
