import React from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialMedia from "./Components/SocialMedia";
import Work from "./Components/Work";
function App() {
  return <div className="App">
<Navbar />
  <Home />
  <Work />

  <About />
  <SocialMedia />
  <Contact/>
  <Footer/>
  </div>;
}

export default App;
