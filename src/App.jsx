import React from "react";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
// import Header from "./Components/Header";
import Home from "./Components/Home";
import Press from "./Components/Press";
import Wavyline from "./Components/Wavyline";

const siteProps = {
  name: "MISBA BAGBAN",
  title: "Fullstack Web-Developer & Technical Writter",
  email: "mishbabagban@gmail.com",
  gitHub: "mishba-ai",
  // instagram: "microsoft",
  linkedIn: "mishba",
  Hashnode: "mishba",
  twitter: "misba",
};

const App = () => {
  return (
    <div id="main" className="overflow-x-hidden	">
      {/* <Header /> */}
      <Home title={siteProps.title} name={siteProps.name} />
      <Projects />
      <Press />
      <Wavyline />
      <Footer {...siteProps} />
    </div>
  );
};

export default App;
