import React from "react";
import CreateStory from "../components/Home/CreateStory";
import Templates from "../components/Home/Templates";
import YourStories from "../components/Home/YourStories";

const Home = () => {
  return (
    <div>
      <CreateStory />
      <YourStories />
      <Templates />
    </div>
  );
};

export default Home;
