import React from "react";
import artikel from "../img/artikel.jpg";
import avatar from "../img/me.png";

const FeaturedPost = () => {
  return (
    <article className="mx-auto w-10/12 flex gap-6 mt-16">
      <img src={artikel} alt="gambar" className="w-7/12 rounded" />
      <div className="article-body w-5/12">
        <p className="flex gap-3 mb-3 text-gray-400">
          <span>UI Design</span>
          <span>&bull;</span>
          <span>October 19, 2022</span>
        </p>
        <span className="text-4xl font-semibold text-gray-300">
          Be creative, design your website using this free and Open Source tools
        </span>
        <p className="text-lg text-gray-400 my-3 w-10/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ducimus pariatur earum, suscipit facere.
        </p>
        <div className="avatar my-8 flex gap-2 items-center">
          <img src={avatar} alt="avatar-1" className="w-14 h-14 rounded-full" />
          <div className="avatar-detail">
            <h4 className="text-xl text-gray-300">Hamzan Wahyudi</h4>
            <span className="text-gray-500">UI Designer</span>
          </div>
        </div>
        <a
          href="#some-artikel"
          className="px-10 p-3 rounded-full bg-gradient-to-tr from-indigo-800 to-blue-500 text-gray-300 inline-block"
        >
          Read more
        </a>
      </div>
    </article>
  );
};

export default FeaturedPost;
