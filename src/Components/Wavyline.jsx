import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

const Wavyline = () => {
  // const sketch = (p) => {
  //   // Variables within the sketch function
  //   let segments;
  //   let length;
  //   let x;
  //   let y;
  //   let points = [];
  //   // Define the intitialization function
  //   p.setup = () => {
  //     p.createCanvas(512, 512);
  //     // Constrain our lines to 3/4 canvas size
  //     length = p.width * 0.8;
  //     segments = 3;
  //     // Define starting points
  //     x = length / segments;
  //     y = p.height * 0.5;
  //     // points.push({ x, y });
  //   };
  //   // Define the main rendering function
  //   p.draw = () => {
  //     p.background("#efefef");
  //     p.beginShape();
  //     p.noFill();
  //     p.stroke("black");
  //     p.strokeWeight(5);
  //     p.curveVertex(x, y);
  //     for (let i = 0; i < segments; i++) {
  //       const yRand = p.random(-(p.height * 0.125), p.height * 0.125);
  //       p.curveVertex((x += length / segments), (y += yRand));
  //       points.push({ x, y }); // Add points within the loop
  //     }
  //     p.endShape();
  //     p.stroke("#ff9900");
  //     p.strokeWeight(10);
  //     points.forEach((p) => p.point(p.x, p.y)); // Draw points using functional approach
  //     p.noLoop();
  //   };
  // };
  // return <ReactP5Wrapper sketch={sketch} />;
};

export default Wavyline;
