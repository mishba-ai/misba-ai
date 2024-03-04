import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
const Home = ({ name, title }) => {
  return (
    <section id="home" className=" scroll-x-hidden w-full h-screen bg-black ">
      <Header />
      <div className="text-white  font-medium mx-24 mt-16">
        <div className="text-[#A6A9AA]">
          <p className="">
            &lt;p/&gt;<span className="text-[#02F74C] font-code font-semibold">This is</span>
            &lt;p/&gt;
          </p>
          <h1 className="mt-4 mx-14">
            &lt;h1/&gt;
            <div className="text-5xl text-white mx-8 font-Kode">{name}</div>&lt;h1/&gt;
          </h1>
          {/* <h2>{title}</h2> */}
        </div>
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
