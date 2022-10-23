import React from "react";
import SkillsCard from "./SkillsCard";

const Skils = () => {
  return (
    <div className="w-10/12 mx-auto mt-20 pt-20" id="skills">
      <h2 className="text-3xl text-white/90 font-semibold">My Skills</h2>
      <hr className="bg-gradient-to-tr border-0 my-2 from-pink-500 to bg-indigo-500 w-1/4 lg:w-1/12 pt-[.1rem]" />
      <div className="lg:flex grid flex-wrap justify-center my-10">
        <SkillsCard
          title={"Javascript"}
          desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <SkillsCard
          title={"Laravel"}
          desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <SkillsCard
          title={"PHP Native"}
          desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <SkillsCard
          title={"React JS"}
          desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <SkillsCard
          title={"TailwindCSS"}
          desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <SkillsCard
          title={"Bootstrap"}
          desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <SkillsCard
          title={"Codeigniter 3"}
          desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  );
};

export default Skils;
