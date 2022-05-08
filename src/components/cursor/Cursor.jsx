import React, { useEffect } from "react";
import "./styles/cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursorRounded = document.querySelector(".cursor_rounded");
    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      cursorRounded.style.transform = `translate3d(${mouseX + 10}px, ${
        mouseY + 10
      }px, 0)`;
    };
    window.addEventListener("mousemove", moveCursor);
  }, []);

  return <div class="cursor_rounded"></div>;
};

export default Cursor;
