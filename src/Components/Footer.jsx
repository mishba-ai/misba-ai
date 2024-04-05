import React from "react";
import PropTypes from "prop-types";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
  const { devDotTo, email, gitHub, linkedIn, medium, name, twitter, youTube } = props;

  return (
    <div
      id="footer"
      className=" bg-black flex flex-col text-gray font-medium justify-center items-center w-full gap-[2.5rem] pt-[1rem] pr-0 pb-[3rem]"
    >
      <div className="">
        {" "}
        <span className="text-sm relative right-[2rem] ">&lt;h3&gt;</span>
        <h1 className="font-Kode text-7xl text-white ">Connect with me</h1>
        <span className="text-sm relative left-[40rem]">&lt;/h3&gt;</span>
      </div>

      <div className="flex  gap-8 justify-center font-Ubuntu text-gray">
        <div className="">
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-48 h-48 rounded-full flex flex-col relative right-[7rem] top-8 justify-center items-center border-2 border-greenPrimary"
            >
              {/* <img src={envelopeIcon} alt="email" className="w-7 h-7 " /> */}
              <span className="text-sm ">&lt;&gt;</span>
              <p className=" ">Email</p>
              <span className="text-sm ">&lt;/&gt;</span>
            </a>
          )}
          {/* {devDotTo && (
            <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
              <img src={devDotToIcon} alt="Dev.to" className="w-7 h-7" />
            </a>
          )} */}
          {gitHub && (
            <a
              href={`https://github.com/${gitHub}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-36 h-36 rounded-full flex flex-col relative left-28 justify-center items-center border-2 border-greenPrimary"
            >
              {/* <img src={gitHubIcon} alt="GitHub" className="w-7 h-7" /> */}
              <span className="text-sm ">&lt;&gt;</span>
              <p className=" ">GitHub</p>
              <span className="text-sm ">&lt;/&gt;</span>
            </a>
          )}
        </div>
        {/* {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )} */}
        <div>
          {linkedIn && (
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-44 h-44 rounded-full relative right-2 bottom-2 flex flex-col  justify-center items-center border-2 border-greenPrimary"
            >
              {/* <img src={linkedInIcon} alt="LinkedIn" className="w-7 h-7" /> */}
              <span className="text-sm ">&lt;&gt;</span>

              <p className=" ">Linkedin</p>
              <span className="text-sm ">&lt;/&gt;</span>
            </a>
          )}
          {medium && (
            <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
              {/* <img src={mediumIcon} alt="Medium" className="w-7 h-7" /> */}
            </a>
          )}
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-40 rounded-full flex flex-col relative left-44 justify-center items-center border-2 border-greenPrimary"
            >
              {/* <img src={twitterIcon} alt="Twitter" className="w-7 h-7" /> */}
              <span className="text-sm ">&lt;&gt;</span>

              <p className=" ">Twitter</p>
              <span className="text-sm ">&lt;/&gt;</span>
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
        </div>
      </div>
      <p className=" mt-0 font-Kode text-sm">Created by {name}</p>
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
