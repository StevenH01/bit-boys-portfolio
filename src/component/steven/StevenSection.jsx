import React from "react";
import SkillSteven from "./SkillSteven";
import AboutSeven from "./AboutSeven";
import ExperienceSteven from "./ExperienceSteven";
import ProjectSteven from "./ProjectSteven";
import ResumeSteven from "./ResumeSteven";
import ContactSteven from "./ContactSteven";

const StevenSection = () => {
  return (
    <div className="p-4 scroll-smooth">
      <SkillSteven />
      <h1 className="flex justify-center mb-4 underline-offset-4 underline text-2xl text-green-500 mt-8">
        About
      </h1>
      <AboutSeven />
      <h1 className="flex justify-center mb-4 underline-offset-4 underline text-2xl text-green-500">
        Experience
      </h1>
      <ExperienceSteven />
      <h1 className="flex justify-center mb-4 underline-offset-4 underline text-2xl text-green-500">
        Projects
      </h1>
      <ProjectSteven />
      <h1 className="flex justify-center mb-4 underline-offset-4 underline text-2xl text-green-500">
        Resume
      </h1>
      <ResumeSteven />
      <h1 className="flex justify-center mb-4 underline-offset-4 underline text-2xl text-green-500">
        Contact Me
      </h1>
      <ContactSteven />
    </div>
  );
};

export default StevenSection;
