import React from "react";
import CreateStory from "../components/Home/CreateStory";
import Templates from "../components/Home/Templates";
import YourStories from "../components/Home/YourStories";
import HomeLayout from '../Layouts/HomeLayout'

const Home = () => {
  return (
    <HomeLayout>
      <CreateStory />
      <YourStories />
      <Templates />
    </HomeLayout>
  );
};

export default Home;
