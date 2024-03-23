import React from "react";

const curosel = ({ project, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      {/* <img className="carousel-img" src={project.img.default} /> */}
      <div className="carousel-item-text">{project.description}</div>
    </div>
  );
};

export default curosel;
