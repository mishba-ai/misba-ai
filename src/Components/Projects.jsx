import React from "react";
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];
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
        <div className="flex mt-16 text-[#A6A9AA] gap-x-2">
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
      </div>
    </section>
  );
};

export default Projects;
