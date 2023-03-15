import React, { useState, useEffect } from "react"
import HomeLayout from "../layouts/HomeLayout"
import { getAllStoryData } from "../components/adapters/story"
import { useNavigate } from "react-router-dom"

const SavedStories = () => {
  const [stories, setStories] = useState([])
  const navigate = useNavigate()

  const allStoryData = async () => {
    const data = await getAllStoryData()
    setStories(data)
  }

  useEffect(() => {
    allStoryData()
  }, [])

  return (
    <HomeLayout>
      <div className="">
        <div className="flex justify-between items-center py-4">
          <h1 className="font-bold text-5xl">Your Stories</h1>
        </div>

        <div className="flex flex-wrap gap-4 items-center my-4 w-full">
          {stories?.map((story, index) => (
            <div
              style={{
                backgroundImage: `url(${story.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => navigate(`/editor/${story.id}`)}
              key={story.id}
              className="border border-gray-200 h-96 aspect-mobile p-16 rounded-lg object-fill cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </HomeLayout>
  )
}

export default SavedStories
