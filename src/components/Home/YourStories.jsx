import React, { Component } from "react";
import left from "../../assets/Pathleft.svg";
import right from "../../assets/Pathright.svg";

const stories = [
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
];

const YourStories = () => {
  return (
    <div className = "ml-36 border-l-2 ">
      <div className="flex justify-between items-center p-4">
        <h1 className="font-bold text-3xl">Your Stories</h1>
        <div className="flex gap-4">
          <img src={left} alt="" />
          <img src={right} alt="" />

          <p className="text-ssorange ml-6"> {"View All >"}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center my-4 w-full overflow-auto">
        {stories.map((story, index) => (
          <div
            key={index}
            className="border border-gray-200 h-44 p-10 rounded-lg"
          >
            {story.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourStories;
