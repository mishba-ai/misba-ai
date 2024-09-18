import React from "react";
import hashnode from "../images/socials/hashnode.svg";
import substack from "../images/socials/substack.svg";
import blink from "../images/socials/blink.svg";
import twitter from "../images/socials/twitter.svg";
import linkedin from "../images/socials/linkedin.svg";
import github from "../images/socials/githublink.svg";
import medium from "../images/socials/medium.svg";

export default function Home() {
  const blogLinks = [
    {
      name: "Hashnode",
      link: "https://mishba.hashnode.dev/",
      icon: hashnode,
    },
    {
      name: "Substack",
      link: "https://substack.com/@misbacodes",
      icon: substack,
    },
  ];
  const socials = [
    {
      svg: twitter,
      link: "https://twitter.com/misba_codes",
      alt: "twitter",
    },
    {
      svg: linkedin,
      link: "https://www.linkedin.com/in/mishba-bagban/",
      alt: "linkedin",
    },
    {
      svg: github,
      link: "https://github.com/mishba-ai",
      alt: "github",
    },
    // {
    //   svg: medium,
    //   link: "https://misba-taj.medium.com/",
    //   alt: "medium",
    // },
  ];
  return (
    <div className="">
      <h2 className="font-Ubuntu text-2xl">Hey, I am Misba 🙋🏻‍♀️</h2>
      <p className="mt-4 font-Kode text-slate-300">
        I&apos;m a{" "}
        <span className="h-2 p-1 bg-neutral-800 border border-neutral-700 rounded text-sm text-violet-200 borde w-16">
          Frontend Developer
        </span>{" "}
        who loves building cool projects. I really enjoy turning ideas into working websites and
        apps. <br /> Right now, I&apos;m getting into{" "}
        <span className="h-2 p-1 bg-neutral-800 border border-neutral-700 rounded text-sm text-violet-200 borde w-16">
          AI and Machine Learning
        </span>{" "}
        because I think they&apos;re super interesting. <br />
        When I&apos;m not coding, I like to play around with design too. I&apos;m into{" "}
        <span className="h-2 p-1 bg-neutral-800 border border-neutral-700 rounded text-sm text-violet-200 borde w-16">
          Product Design
        </span>{" "}
        and enjoy making things that look good and work well.
        <br />
        <br /> Basically, I&apos;m all about creating awesome digital stuff that people will love to
        use!{" "}
      </p>

      <section className="mt-10 font-Kode text-slate-300">
        <p>
          I&apos;m passionate about sharing knowledge and engaging in public learning. My writing
          focuses on AI/ML topics I&apos;m currently exploring, as well as web development insights.
          Through my articles, I document my journey in these fields, offering readers a glimpse
          into my learning process
        </p>

        <div className="mt-6">
          <ul className="flex gap-x-5 w-full text-lg">
            {blogLinks.map((blog) => (
              <li
                className="flex w-1/2 h-28 px-12 justify-between bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300  rounded-lg items-center mt-4"
                key={blog.name}
              >
                <div>
                  <img src={blog.icon} alt={blog.name} className="w-8 h-8" />
                  {blog.name}
                </div>
                <div>
                  <a href={blog.link} target="_blank" rel="noreferrer">
                    <img src={blink} className="w-10 h-10" alt="" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 font-Kode text-slate-300">
        <p>Let&apos;s turn ideas into reality – drop me a line! </p>
        <ul className="flex gap-x-8 mt-2">
          {socials.map((social) => (
            <li key={social.alt} className=" justify-center rounded-lg items-center mt-4">
              <a href={social.link} target="_blank" rel="noreferrer">
                <img
                  src={social.svg}
                  alt={social.alt}
                  className="w-8 h-8 filter invert sepia-0 saturate-0 hue-rotate-0 brightness-100 contrast-100 hover:brightness-75 hover:fill-[#a78bfa] transition-all duration-300 "
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
