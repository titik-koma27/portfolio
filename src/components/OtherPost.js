import React from "react";
import PostCard from "./PostCard";

const OtherPost = () => {
  return (
    <div className="other-post mx-auto w-10/12 mt-24">
      <h3 className="text-2xl uppercase font-semibold text-gray-200 my-6">
        Other Posts
      </h3>
      <div className="flex gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default OtherPost;
