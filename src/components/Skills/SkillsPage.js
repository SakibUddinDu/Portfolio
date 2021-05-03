import React from "react";
import CategorySkills from "./CategorySkills/CategorySkills";
import "./SkillPage.css";
import Skills from "./Skills";

const SkillsPage = () => {
  const proficient = ["Javascript", "ES6", "BootStrap5", "HTML5", "CSS3"];
  const comfortable = [
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "REST-API",
    "JWT",
    "MongoDB",
    "Firebase",
  ];
  const tools = ["Git", "Heroku", "Netlify", "VS-Code", "Chrome-Dev-Tool"];

  return (
    <div className="skills">
      <div className="text-center">
        <h2 className="heading">Skills</h2>
        <h1 className="mainHeader">My Skills</h1>
        <div className="commonBorder"></div>
      </div>
      {/* <div className="container"> */}
        <div className="row">
          <div className="container row">
          <div className="col-md-6 col-sm-12">
            <Skills />
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="text-white">
              <CategorySkills category={"Comfortable"} data={comfortable} />
              <CategorySkills category={"Proficient"} data={proficient} />
              <CategorySkills category={"Tools"} data={tools} />
            </div>
          </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default SkillsPage;
