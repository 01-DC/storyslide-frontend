import React from "react";
import CreateStory from "../components/Home/CreateStory";
import Templates from "../components/Home/Templates";
import YourStories from "../components/Home/YourStories";
import SideBar from "../components/Home/SideBar";

const Home = () => {
  return (
    <div className = " ">
      <SideBar />
      <CreateStory />
      <YourStories />
      <Templates />
    </div>
  );
};

export default Home;
