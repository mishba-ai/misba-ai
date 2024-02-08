import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        background: "transparent",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        fontFamily: "Roboto·Mono·,·monospace",
      }}
    >
      <a href="#home" style={{color:'white'}}>.HOME</a>
      <a href="#about" style={{color:'white'}}>.ABOUT</a>
      <a href="#portfolio" style={{color:'white'}}>.PORTFOLIO</a>
      <a href="#footer" style={{color:'white'}}>.CONTACT</a>
    </div>
  );
};

export default Header;
