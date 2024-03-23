import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

const Home = ({ name, title }) => {
  return (
    <section id="home" className=" scroll-x-hidden w-full h-screen bg-black ">
      <Header />
      <div className="text-white flex justify-around font-medium mx-24 mt-16">
        <div className="text-[#A6A9AA]">
          <p className="">
            <span className="text-sm">&lt;p&gt;</span>
            <span className="text-[#02F74C] text-sm font-code text-lg font-semibold">This is</span>
            <span className="text-sm"> &lt;/p&gt;</span>
          </p>
          <h1 className="mt-4 mx-16">
            <span className="text-sm">&lt;h1&gt;</span>
            <div className="text-7xl w-56 text-white mx-10 font-Kode">{name}</div>
            <span className="text-sm">&lt;/h1&gt;</span>
          </h1>
          <p className="mt-4">
            <span className="text-sm">&lt;p&gt;</span>{" "}
            <span className="text-[#02F74C]  font-code text-lg font-medium">{title}</span>
            <span className="text-sm">&lt;/p&gt;</span>{" "}
          </p>
        </div>
        <div className="">
          <div className="w-56 h-56 rounded-full border border-[#A6A9AA] flex justify-center items-center">
            <p>
              {" "}
              <span className="text-[#02F74C]">
                <span className="text-sm">&lt;</span>Download Cv
                <span className="text-sm">/&gt;</span>
              </span>
            </p>
          </div>
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
