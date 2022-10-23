import React from "react";

const SkillsCard = ({ title, desc }) => {
  return (
    <div className="lg:w-3/12 w-full py-2">
      <div className="bg-gradient-to-tr lg:mr-3 px-6 py-4 rounded-lg text-white/80 from-indigo-800 to-pink-800">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-white/60">{desc}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
