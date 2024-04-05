import React from "react";
import connectdevs from "../images/connectdevs.png";
import { useState } from "react";
// import backward from "../images/backward.svg";
import forward from "../images/forward.svg";
import link from "../images/socials/link.svg";
import scode from "../images/socials/scode.svg";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectList = [
    {
      title: "Connect Devs",
      image: connectdevs,
      description:
        "Your go-to platform for developers worldwide to find partners, collaborate on projects, and join hackathons. Expand your network, unleash creativity, and be part of a thriving tech community.",
      url: "https://connect-devs.netlify.app/",
      code: "https://github.com/mishba-ai/Connect-Devs",
    },
    {
      title: "Bibliophile",
      description:
        "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
      url: "",
      code: "https://github.com/mishba-ai/Bibliophile",
    },
    {
      title: "Neurons",
      description:
        "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
      url: "",
      code: "https://github.com/mishba-ai/Neurons",
    },
    {
      title: "Nomad Nest",
      description:
        "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
      url: "",
      code: "",
    },
  ];

  // updating the index

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= projectList.length) {
      newIndex = projectList.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  // const prev = () => setCurrentIndex(currentIndex) => (currentIndex ===0 ? projectList.length -1 : currentIndex -1)

  // const next = () => setCurrentIndex(currentIndex) => (currentIndex === projectList.length -1 ? 0 : currentIndex +1)
  return (
    <section className="h-screen w-full bg-black overflow-y-hidden">
      <div className="flex justify-center items-center pt-8  flex-col">
        <p className="text-gray">
          {" "}
          <span className="text-sm">&lt;h2&gt;</span>
          <div className="text-white font-Kode text-7xl mx-4">MY Portfolio</div>
          <span className="relative left-[30rem] text-sm">&lt;/h2&gt;</span>
        </p>

        <div className="flex mt-16 text-gray gap-x-6 overflow-hidden">
          <div className="w-ful overflow-hidden relative">
            {/* carousel items */}

            <div className=" flex flex-nowrap overflow-hidden justify-center items-center ">
              {projectList.slice(currentIndex, currentIndex + 1).map((project, index) => (
                <div
                  className="flex transition-transform ease-out  duration-500"
                  key={project.title}
                  style={{ transform: `translate(-${(index - currentIndex) * 100}%)` }}
                >
                  {" "}
                  <div className=" flex gap-x-10 justify-center items-center ">
                    <div className="">
                      <img
                        src={project.image}
                        alt=""
                        className="w-96 h-96  border-2 rounded-full border-gray"
                      />
                    </div>
                    <div className="flex flex-col">
                      {" "}
                      <div>
                        {" "}
                        <div className="absolute text-sm left-[24rem]">&lt;p&gt;</div>
                        <h3 className="font-Kode text-5xl mt-6 text-greenPrimary">
                          {project.title}
                        </h3>
                        <p className="w-96  font-code text-xl font-semibold mt-1">
                          {project.description}
                        </p>
                        <div className=" text-sm absolute  left-[24rem]">&lt;/p&gt;</div>
                      </div>
                      <div className="flex gap-x-6 mt-6 justify-end">
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <img src={scode} alt="" className="h-8 w-8" />
                        </a>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <img src={link} alt="" className="h-8 w-8 " />{" "}
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              ))}
            </div>
            {/* curousel buttons */}

            <div className="flex justify-between ">
              <button
                className="w-14 h-14 flex justify-center items-center rounded-full bg-greenPrimary border-spacing-1 border-greenPrimary"
                onClick={() => {
                  updateIndex(currentIndex - 1);
                }}
              >
                <img src={forward} alt="backward-arrow" className="rotate-180" />
              </button>

              <button
                className="w-14 h-14 flex justify-center items-center rounded-full bg-greenPrimary border-spacing-1 border-greenPrimary"
                onClick={() => {
                  updateIndex(currentIndex + 1);
                }}
              >
                <img src={forward} alt="forward-arrow" />
              </button>
            </div>
          </div>
        </div>
        <hr className="border-[#1D5D33] w-72  border-2" />
      </div>
    </section>
  );
};

export default Projects;
