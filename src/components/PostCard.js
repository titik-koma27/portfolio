import React from "react";

const PostCard = () => {
  return (
    <div className="w-3/12 bg-gray-900 shadow rounded-lg overflow-hidden">
      <img src="https://source.unsplash.com/800x400" alt="gambar" />
      <div className="detail p-3">
        <p className="text-gray-500 flex gap-2 items-center">
          <small>Frontend</small>
          <span>&bull;</span>
          <small>Posted at Sep 11 2022</small>
        </p>
        <h4 className="text-2xl text-gray-300">
          4 Most useful chrome tools that you must to know
        </h4>
        <p className="text-gray-500 text-md">
          Lorem ipsum, dolor sit amet. Quaerat illo nihil ratione?
        </p>
        <a
          href="#some-detail"
          className="px-8 py-1 text-gray-300 rounded-full bg-gradient-to-tr from-indigo-800 to-blue-500 mt-3 inline-block"
        >
          Read
        </a>
      </div>
    </div>
  );
};

export default PostCard;
