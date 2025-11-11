import React from "react";
import Hero from "../Components/Hero";
import Experience from "../Components/Experience";
import FAQ from "../Components/FAQ";
import Achievements from "../Components/Achievements";
import Courses from "../Components/Courses";
import Projects from "./Projects";
import SkillsMarquee from "../Components/SkillsMarquee";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <SkillsMarquee></SkillsMarquee>
      <Projects></Projects>
      <Experience></Experience>
      <Courses></Courses>
      <FAQ></FAQ>
      <Achievements></Achievements>
    </div>
  );
};

export default Home;
