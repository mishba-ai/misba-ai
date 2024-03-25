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
            <span className="text-[#02F74C] text-sm font-code  font-semibold">This is</span>
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
          <span
            className="w-72 h-72 border-r-2 border-r-gray border -rotate-[40deg] bottom-[15rem] border-transparent rounded-[50%] left-[63rem] absolute 
          after:absolute after:w-2 after:h-2 after:bg-white after:ring-2 after:rounded-full after:ring-green-400/50 after:shadow-md after:content-[''] after:shadow-white
          after:bottom-[15.6rem] after:right-12
          before:absolute before:w-2 before:h-2 before:bg-white before:ring-2 before:rounded-full before:ring-green-400/50 before:shadow-md before:content-[''] before:shadow-white
          before:top-[15.6rem] before:right-12
          
          "
          ></span>
          <div
            className="w-56 h-56 rounded-full border relative border-[#A6A9AA] flex justify-center items-center after:w-64 after:h-64  after:absolute after:border-t-gray after:border-t-2 after:border after:-rotate-45  after:border-transparent  after:rounded-[50%] 
          before:w-64 before:h-64  before:absolute before:border-b-gray before:border-b-2 before:border before:border-transparent 
          before:-rotate-45 before:top- before:rounded-[50%] 
          "
          >
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
