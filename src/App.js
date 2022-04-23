import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { TopNav } from "./components/top-nav/TopNav";
import { Hero } from "./components/hero/Hero";
import { Skill } from "./components/skill/Skill";
import { Project } from "./components/proj/Project";
import { AboutMe } from "./components/about/AboutMe";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div classNameName="wrapper">
      <div id="top-nav" className="top-nav">
        <TopNav />
        <Hero />
      </div>

      <Skill />
      <Project />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};
