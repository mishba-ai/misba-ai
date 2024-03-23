import React from "react";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
// import Header from "./Components/Header";
import Home from "./Components/Home";
import Press from "./Components/Press";
import Wavyline from "./Components/Wavyline";
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

const primaryColor = "#000";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main" className="overflow-x-hidden	">
      {/* <Header /> */}
      <Home title={siteProps.title} name={siteProps.name} />
      <Projects />
      <Press />
      <Wavyline />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
