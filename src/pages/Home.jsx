import React from "react"
import CreateStory from "../components/home/CreateStory"
import Templates from "../components/home/Templates"
import YourStories from "../components/home/YourStories"
import HomeLayout from "../layouts/HomeLayout"

const Home = () => {
  return (
    <HomeLayout>
      <CreateStory />
      <YourStories />
      <Templates />
    </HomeLayout>
  )
}

export default Home
