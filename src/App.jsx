import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "MISHBA BAGBAN",
  title: "FULLSTACK WEB-DEVELOPER & TECHNICAL WRITER",
  email: "alex@example.com",
  gitHub: "mishba-ai",
  instagram: "microsoft",
  linkedIn: "mishba",
  Hashnode: "",
  twitter: "mishba",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main" className="overflow-x-hidden	">
      {/* <Header /> */}
      <Home title={siteProps.title} name={siteProps.name} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
