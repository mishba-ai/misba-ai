import React from "react";
import githublink from "../images/svg/githublink.svg";
import link from "../images/svg/link.svg";
import connectdevs from "../images/connectdevs.png";
import { useState } from "react";
import PropTypes from "prop-types";

const ProjectItem = ({ project, isHovered, onHover, onLeave }) => (
  <li className="relative">
    <h1
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="text-2xl text-violet-300 font-Kode "
    >
      {project.title}
    </h1>
    <p className="font-Ubuntu text-lg mt-2  text-neutral-500 ">{project.description}</p>
    <p className=" mt-3 flex gap-x-2 font-Kode text-neutral-500">
      {project.TechStack.map((tech, index) => (
        <span
          key={index}
          className="bg-neutral-800  border border-neutral-700 rounded text-sm text-neutral-400 p-1"
        >
          {tech}
        </span>
      ))}
    </p>
    <div className="flex gap-x-2 justify-end">
      <button className="w-8 h-8 ">
        <a href={project.link}>
          <img src={githublink} alt="sourcecode" />
        </a>{" "}
      </button>
      <button className="w-10 h-10">
        <a href={project.websiteLink}>
          <img src={link} alt="weblink" />
        </a>{" "}
      </button>
    </div>
    {isHovered && project.Image && (
      <div className="absolute  top-0 left-fu ml-4 z-40">
        <img
          src={project.Image}
          alt={project.title}
          className="w-64 h-64 border-4 border-violet-400 object-cover rounded-full shadow-lg"
        />
      </div>
    )}
  </li>
);
ProjectItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    websiteLink: PropTypes.string,
    TechStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    Image: PropTypes.string,
  }).isRequired,
  isHovered: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};
export default function Projects() {
  const projectInfo = [
    {
      title: "NomadX",
      description:
        "NomadX is a web app designed to be a hub for Digital Nomads. It helps them find ideal work-travel destinations,connect with other nomads,and manage the logistics of their remote lifestyle.",
      link: "https://github.com/mishba-ai/NomadX",
      websiteLink: "",
      TechStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      Image: connectdevs,
    },
    {
      title: "Connect-dev",
      description:
        "Connect-dev is a social media platform for developers. It helps developers connect with each other, share their work, and collaborate on projects.",
      link: "https://github.com/mishba-ai/Connect-dev",
      websiteLink: "",
      TechStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Bunko",
      description:
        "Bunko is a  web app where you can read any book and can read summary of the book.",
      link: "https://github.com/mishba-ai/Bunko",
      websiteLink: "",
      TechStack: ["sveltekit", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Zen-do",
      description:
        "Zen-do is a web app where you can write your daily journal and can also read other's journal.others can comment on your journal.",
      link: "https://github.com/mishba-ai/Zen-do",
      websiteLink: "",
      TechStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="flex flex-wrap  h-full">
      <ul className="flex flex-col gap-6 ">
        {projectInfo.map((project, index) => (
          <ProjectItem
            project={project}
            key={index}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            OnLeave={() => setHoveredIndex(null)}
          />
        ))}
      </ul>
    </div>
  );
}
