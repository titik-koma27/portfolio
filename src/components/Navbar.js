import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="flex flex-col lg:flex-row lg:w-10/12 w-full mx-auto items-center justify-between gap-8">
      <div className="lg:w-2/12 w-full flex items-center lg:justify-start justify-center lg:gap-2">
        <div className="w-10 h-10 flex -rotate-12 text-white/80 font-bold rounded items-center justify-center bg-gray-300">
          <div className="w-10 h-10 flex rotate-12 scale-95 text-white/80 font-bold rounded items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-900">
            H
          </div>
        </div>
        <span className="text-xl lg:mx-0 mx-3 font-bold text-gray-300 uppercase">
          HamzanDev
        </span>
      </div>
      <div className="lg:w-8/12 w-full mx-8">
        <ul className="flex items-center lg:justify-start justify-center lg:gap-10 gap-5 text-white/40">
          <li>
            <a className="hover:underline" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#projects">
              Projects
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="hover:underline cursor-pointer"
            >
              Contact Me
            </button>
            {dropdown && (
              <ul className="absolute mt-3 rounded text-gray-300 bg-gray-700">
                <li className="border-b border-white/30 py-3 px-6">
                  <a href="#mail">Email</a>
                </li>
                <li className="py-3 px-6">
                  <a target={"_blank"} href="#framework">
                    WhatsApp
                  </a>
                </li>
                <li className="border-t border-white/30 py-3 px-6">
                  <a href="#framework" target={"_blank"}>
                    Instagram
                  </a>
                </li>
                <li className="border-t border-white/30 py-3 px-6">
                  <a href="#framework" target={"_blank"}>
                    GitHub
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="lg:w-2/12 w-full">
        <form action="" className="flex lg:block justify-center">
          <input
            type="text"
            className="lg:w-full w-10/12 px-4 py-2 bg-gray-700 rounded"
            placeholder="Search ..."
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
