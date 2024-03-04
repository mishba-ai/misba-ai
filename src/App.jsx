import React from "react";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
const siteProps = {
  name: "MISHBA BAGBAN",
  title: "Fullstack Web-Developer & Technical Writter",
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
      <Projects />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
