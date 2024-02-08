import React from "react";
import PropTypes from "prop-types";

// const imageAltText = "homeimage";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height bg-black ">
      {/* <img
        className="background"
        src="https://i.pinimg.com/564x/75/87/df/7587df77ef521cf98057d0028ee983f1.jpg"
        alt={imageAltText}
      /> */}

      <div
        style={{
          color: "#99ff52",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
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
