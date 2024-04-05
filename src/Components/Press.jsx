import React from "react";
import rightarrow from "../images/rightarrow.svg";
const Press = () => {
  return (
    <section id="press" className="w-full bg-black pt-44">
      <div className="text-gray flex justify-center items-center flex-col font-medium">
        <span className="text-sm relative right-[12rem]">&lt;h3&gt;</span>
        <h1 className="text-white font-Kode text-7xl mx-4">MY Press</h1>
        <span className="text-sm relative left-[12rem]">&lt;/h3&gt;</span>

        <ul className="mt-16  font-Kode text-white text-4xl text-center flex flex-col justify-center items-center">
          <hr className="border-[#1D5D33] w-[800px]" />
          <li className="hover:bg-greenSecondary hover:text-black cursor-pointer p-4 flex justify-between w-full">
            {" "}
            <p>Hashnode</p>
            <span className="flex justify-center items-center hover:animate-pulse ">
              <a href="https://hashnode.com/@misba">
                {" "}
                <img src={rightarrow} alt="" />
              </a>
            </span>
          </li>
          <hr className="border-[#1D5D33] w-[800px]" />
          {/* <li className=" p-4 hover:bg-greenSecondary hover:text-black cursor-pointer flex justify-between w-full">
            <p>Showwcase</p>
            <span className="flex justify-center items-center">
              <img src={rightarrow} className="" alt="" />
            </span>
          </li> */}
          <hr className="border-[#1D5D33] w-[800px]" />
        </ul>
        <div
          className="mt-10 h-40 border border-greenPrimary relative after:rounded-full after:h-2 after:absolute after:top-[9.8rem] after:-right-1   after:w-2 after:bg-white after:shadow-md  after:ring-2 after:ring-green-400/50  after:content-[''] after:shadow-white    
        before:rounded-full before:h-2 before:absolute before:-top-2 before:-right-1   before:w-2 before:ring-green-400/50 before:ring-2 before:bg-white before:shadow-md before:content-[''] before:shadow-white"
        ></div>
      </div>
    </section>
  );
};

export default Press;
