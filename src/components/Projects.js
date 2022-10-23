import React from "react";
import dashboard from "../img/dashboard.png";
import portfolio from "../img/portfolio.png";
import login from "../img/login.png";
import school from "../img/school.png";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="w-10/12 mx-auto mt-40" id="projects">
      <h2 className="text-3xl font-semibold text-white">Projects</h2>
      <hr className="bg-gradient-to-tr border-0 my-2 from-pink-500 to bg-indigo-500 w-1/12 pt-[.19rem]" />
      <div className="lg:flex grid flex-wrap my-14">
        <ProjectCard
          image={dashboard}
          title="Inventory App"
          desc={"Lorem ipsum dolor, sit amet consectetur adipisicing."}
        />
        <ProjectCard
          image={school}
          title="School Management App"
          desc={"Lorem ipsum dolor, sit amet consectetur adipisicing."}
        />
        <ProjectCard
          image={portfolio}
          title="Portfolio Website"
          desc={"Lorem ipsum dolor, sit amet consectetur adipisicing."}
        />
        <ProjectCard
          image={login}
          title="Login System"
          desc={"Lorem ipsum dolor, sit amet consectetur adipisicing."}
        />
      </div>
    </div>
  );
};

export default Projects;
