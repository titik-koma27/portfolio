import React from "react";
import avatar from "../img/smp.png";
const Banner = () => {
  return (
    <div className="flex w-10/12 mx-auto lg:flex-row flex-col-reverse lg:py-28 py-12 lg:gap-4">
      <div className="lg:w-7/12 flex flex-col w-full justify-center lg:text-start text-center">
        <span className="text-white/70">Hello there,</span>
        <h1 className="text-white/90 font-bold lg:text-6xl text-3xl">
          My name is <br /> Hamzan Wahyudi
        </h1>
        <span className="py-3 lg:text-xl lg:px-1 text-white/70">
          I am a Fullstack Web Developer
        </span>
        <a
          href="#mail"
          className="lg:w-3/12 lg:px-0 px-10 py-3 font-semibold lg:mx-0 mx-auto text-center rounded-full text-white/80 my-2 text-small bg-gradient-to-bl from-pink-600 to-indigo-500"
        >
          Contact
        </a>
      </div>
      <div className="lg:w-5/12 flex lg:mb-0 mb-10 items-center w-full justify-center">
        <div className="avatar rounded-full bg-gradient-to-tr py-14 flex items-center justify-center from-gray-900 to-gray-800 lg:mr-10 lg:scale-90 overflow-hidden">
          <img
            src={avatar}
            alt="avatar"
            className="scale-150 ml-10 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
