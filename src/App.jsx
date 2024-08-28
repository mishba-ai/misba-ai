import React from "react";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Press from "./Components/Press";


const siteProps = {
  name: "MISBA BAGBAN",
  title: "Frontend Web-Developer & Technical Writter",
  email: "mishbabagban@gmail.com",
  gitHub: "mishba-ai",
  linkedIn: "mishba-bagban",
  twitter: "mishba_bagban",
};

const App = () => {
  return (
    <div id="main" className="overflow-x-hidden	">
      {/* <Header /> */}
      <Home title={siteProps.title} name={siteProps.name} />
      {/* <Projects />
      <Press />
    
      <Footer {...siteProps} /> */}
    </div>
  );
};

export default App;
