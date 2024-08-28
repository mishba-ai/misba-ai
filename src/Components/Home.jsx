import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
// import {link} from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className=" scroll-x-hidden flex justify-center min-h-screen bg-[#0e0e0e] ">
      <Header />

      <div>
        <h2>Hey,I am misba </h2>
      </div>
      {/* <div className="text-white flex justify-around font-medium mx-24 w-[44rem] mt-20">
        <div className="text-gray">
          <p className="">
            <span className="text-sm">&lt;p&gt;</span>
            <span className="text-greenPrimary text-sm font-code  font-semibold">This is</span>
            <span className="text-sm"> &lt;/p&gt;</span>
          </p>
          <h1 className="mt-4 mx-16">
            <span className="text-sm">&lt;h1&gt;</span>
            <div className="text-8xl w-56 text-white mx-10 font-Kode">{name}</div>
            <span className="text-sm">&lt;/h1&gt;</span>
          </h1>
          <p className="mt-4">
            <span className="text-sm">&lt;p&gt;</span>{" "}
            <span className="text-greenPrimary  font-code text-lg font-medium">{title}</span>
            <span className="text-sm">&lt;/p&gt;</span>{" "}
          </p>
        </div>
        <div className="">
          <span
            className="w-72 h-72 border-r-2 border-r-gray border -rotate-[42deg] bottom-[16.7rem] border-transparent rounded-[50%] left-[63rem] absolute  animate-spi
          "
          ></span>
          <span className=""></span>
          <span className=""></span>
          <div
            className="w-60  h-60 rounded-full border-2 relative border-gray flex justify-center items-center  after:w-64 after:h-64  after:absolute after:border-t-greenPrimary after:border-t-2 after:border after:-rotate-45  after:animate-spin after:border-transparent  after:rounded-[50%] 
          before:w-64 before:h-64  before:absolute before:border-b-greenPrimary before:border-b-2 before:border before:border-transparent before:animate-spin
          before:-rotate-45 before:to before:rounded-[50%] after:pointer-events-none before:pointer-events-none 
          "
          >
            {" "}
            <p>
              {" "}
              <a
                href="https://www.showwcase.com/mishbabagban373/resume/"
                target="_blank"
                rel="noreferrer"
                className="hover:animate-pulse"
              >
                <span className="text-greenSecondary font-Ubuntu ">
                  {" "}
                  <span className="text-sm">&lt;</span> Check Resume{" "}
                  <span className="text-sm">/&gt;</span>
                </span>{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div> */}
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
