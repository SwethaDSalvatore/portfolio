import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <Highlights />
      <About />
      <Contact />
      <Thanks />
      <Footer />
    </div>
  );
};

export default App;
