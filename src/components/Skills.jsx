import React from "react";
import Management from "./Management";
import Analysis from "./Analysis";

const Skills = () => {
  return (
    <div className="sm:px-16 px-8 sm:py-12 py-12 fontStyle">
      <h1 className="font-bold text-4xl text-gray-900 text-center">Skills & Experiences</h1>
      <p className="text-center mt-4 text-gray-600 font-medium">
        Highlighting key skills and professional experiences to showcase
        expertise and capabilities in various domains.
      </p>
      <Management />
      <Analysis />
    </div>
  );
};

export default Skills;
