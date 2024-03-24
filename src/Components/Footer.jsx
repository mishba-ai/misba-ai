import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
// import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";
import hashnode from "../images/socials/hashnode.svg";

const Footer = (props) => {
  const { devDotTo, email, gitHub, linkedIn, medium, name, twitter, youTube } = props;

  return (
    <div
      id="footer"
      className=" bg-black flex flex-col text-[#A6A9AA] font-medium justify-center items-center w-full gap-[2.5rem] pt-[10rem] pr-0 pb-[3rem]"
    >
      <div className="">
        {" "}
        <span className="text-sm relative right-[2rem] ">&lt;h3&gt;</span>
        <h1 className="font-Kode text-7xl text-white ">Connect with me</h1>
        <span className="text-sm relative left-[40rem]">&lt;/h3&gt;</span>
      </div>

      <div className="flex gap-x-8 justify-center">
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="w-7 h-7" />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" className="w-7 h-7" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="w-7 h-7" />
          </a>
        )}
        {/* {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )} */}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="w-7 h-7" />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="w-7 h-7" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="w-7 h-7" />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeIcon} alt="YouTube" className="w-7 h-7" />
          </a>
        )}
        {hashnode && (
          <a
            href={`https://www.hashnode.com/c/${hashnode}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={hashnode} alt="hashnode" className="w-8 h-8" />
          </a>
        )}
      </div>
      <p className="text-white mt-0 font-Kode text-sm">Created by {name}</p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
