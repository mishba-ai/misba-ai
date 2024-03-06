import React from "react";
const projectList = [
  {
    title: "Connect Devs",
    description:
      "Your go-to platform for developers worldwide to find partners, collaborate on projects, and join hackathons. Expand your network, unleash creativity, and be part of a thriving tech community.",
    url: "https://connect-devs.netlify.app/",
  },
  {
    title: "Bibliophile",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "",
  },
  {
    title: "Neurons",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "",
  },
  {
    title: "Nomad Nest",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "",
  },
];

const Press = () => {
  return (
    <section id="press">
      <div className="container">
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Press;
