import React from "react";
import PropTypes from "prop-types";

const imageAltText = "homeimage";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img
        className="background"
        src="https://i.pinimg.com/564x/75/87/df/7587df77ef521cf98057d0028ee983f1.jpg"
        alt={imageAltText}
      />

      <div
        style={{
          color: "white",
          position: "absolute",
          bottom: "2rem",
          display: "flex",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
