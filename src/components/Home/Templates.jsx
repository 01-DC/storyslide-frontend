import React from "react";
import left from "../../assets/Pathleft.svg";
import right from "../../assets/Pathright.svg";

const templates = [
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
  {
    name: "",
  },
];

const Templates = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="font-bold text-3xl">Templates</h1>
        <div className="flex gap-4">
          <img src={left} alt="" />
          <img src={right} alt="" />
          <p className="text-ssorange ml-6">{"View All  >"}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center my-4 w-full overflow-auto">
        {templates.map((template, index) => (
          <div
            key={index}
            className="border border-gray-200 h-44 p-10 rounded-lg w-6"
          >
            {template.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
