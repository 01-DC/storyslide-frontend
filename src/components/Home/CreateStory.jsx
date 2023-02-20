import React from "react";

const CreateStory = () => {
  return (
    <div className = "ml-36 border-l-2">
      <h1 className="font-bold text-3xl p-4">Create Your Own Story</h1>
      <p className="text-gray-400 text-sm ml-4">
        Bring Your Ideas to Life with Our Easy-to-Use Creation Tool
      </p>

      <div className="flex gap-4 mt-4 p-4">
        <div className="flex flex-col bg-ssorange-light rounded-lg p-8">
          <input
            className="border border-gray-300 rounded-lg px-2 py-1"
            placeholder="https://flowbite.com/"
          ></input>
          <button className="bg-ssorange rounded-lg mt-2 py-1 px-2 text-white">
            Convert to stories
          </button>
        </div>
        <div className="bg-ssorange-light p-8 rounded-lg">
          <p className="text-ssorange">Create Stories</p>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
