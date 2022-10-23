import React from "react";

const ProjectCard = ({ image, title, desc }) => {
  return (
    <div className="lg:w-4/12 w-full lg:pr-4 mb-10">
      <div className="card overflow-hidden bg-gray-900 shadow-lg rounded-lg">
        <img src={image} alt="dashboard" />
        <div className="project-detail flex flex-col gap-3 px-6 py-4 text-white">
          <h4 className="text-2xl font-semibold ">{title}</h4>
          <p className="text-white/70">{desc}</p>
          <a
            href="#somedetail"
            className="px-4 py-2 bg-gradient-to-tr w-1/3 text-sm rounded-full text-center from-indigo-800 to to-pink-800"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
