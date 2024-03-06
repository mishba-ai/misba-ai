import React from "react";
const description = [{ p1: "Coding partner" }, { p2: "nomad nest" }, { p3: "bibliophile" }];
const Project = ["bibliophile", "Connect Devs", "Nomad Nest"];
const Projects = () => {
  return (
    <section className="h-screen w-full bg-black">
      <div className="flex justify-center items-center pt-8  flex-col">
        <p className="text-[#A6A9AA]">
          {" "}
          <span className="text-sm">&lt;h2&gt;</span>
          <div className="text-white font-Kode text-7xl mx-4">MY Portfolio</div>
          <span className="absolute right-[30rem] text-sm">&lt;/h2&gt;</span>
        </p>
        <div className="flex mt-16 text-[#A6A9AA] gap-x-6">
          <div className="w-72 h-72 border rounded-full border-[#A6A9AA]"></div>
          <div className="">
            <span className="absolute text-sm left-[42rem]">&lt;p&gt;</span>{" "}
            <h1 className="font-Kode text-4xl mt-4 text-[#02F74C]"> PROJECTS </h1>
            <p className="w-96 font-code font-semibold mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </p>
            <span className="mt-4 text-sm absolute left-[42rem]">&lt;/p&gt;</span>
          </div>
        </div>
        <hr className="border-[#1D5D33] w-72 mt-10 border-2" />
      </div>
    </section>
  );
};

export default Projects;
