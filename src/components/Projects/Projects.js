//timeline
import { Events, Timeline } from "@merc/react-timeline";
//bootstrap
import React, { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projectsData } from "./ProjectData";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  console.log(projects);

  return (
    <div id="Portfolio" className="portfolio">
      <div className="text-center">
        <h2 className="heading">Portfolio</h2>
        <h1 className="mainHeader">Portfolio Showcase</h1>
        <div className="commonBorder"></div>
      </div>
      <Timeline>
        <Events>
          {projects.map((project) => (
            <ProjectCard
              name={project.name}
              description={project.description}
              imgSrc={project.imgSrc}
              technologies={project.technologies}
              features={project.features}
              liveUrl={project.liveUrl}
              clientUrl={project.clientUrl}
              serverUrl={project.serverUrl}
            />
          ))}
        </Events>
      </Timeline>
    </div>
  );
}
