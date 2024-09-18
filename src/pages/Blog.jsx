import React, { useEffect } from "react";
import hashnode from "../images/socials/hashnode.svg";
import substack from "../images/socials/substack.svg";
import blink from "../images/socials/blink.svg";

export default function Blog() {
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

  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  let parser = new DOMParser();

  const feedUrls = ["https://mishba.hashnode.dev/rss.xml", "https://substack.com/feed/@misbacodes"];

  const displayFeed = (feedUrl, ContainerId) => {
    fetch(CORS_PROXY + feedUrl)
      .then((res) => res.text())
      .then((str) => {
        let doc = parser.parseFromString(str, "text/xml");
        let items = doc.querySelectorAll("item");
        let html = "";
        items.forEach((item) => {
          html += `
          <div class="p-4 border border-neutral-700 rounded-lg my-4">

            <a href="${item.querySelector("link").textContent}" target="_blank" rel="noreferrer">
              <h3 class="text-xl font-Ubuntu text-violet-200">${
                item.querySelector("title").textContent
              }</h3>
            </a>
            <p class="text-sm font-Kode text-neutral-300">${
              item.querySelector("description").textContent
            }</p>
          </div>
        `;
        });
        document.getElementById(ContainerId).innerHTML = html;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    feedUrls.forEach((feedUrl, index) => {
      displayFeed(feedUrl, `feed${index}`);
    });
  }, []);

  return (
    <div className="text-neutral-400">
      {/* {feedUrls.map((_, index) => (
        <div id={`feedContainer${index}`} key={index}></div>
      ))} */}

      <div>
        <p className="text-violet-200 font-Kode text-2xl font-medium">Read my blogs on </p>
      </div>
      <div className="mt-6">
        <ul className="flex gap-x-5 w-full text-lg">
          {blogLinks.map((blog) => (
            <li
              className="flex w-1/2 h-28 px-12 justify-between bg-neutral-800 bg-opacity-25 hover:bg-neutral-900 transition-colors duration-300  rounded-lg items-center mt-4"
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
    </div>
  );
}
