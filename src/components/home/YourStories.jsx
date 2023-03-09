import React, { useRef } from "react"
import left from "../../assets/Pathleft.svg"
import right from "../../assets/Pathright.svg"
import { useEffect, useState } from "react"
import { getAllStoryData } from "../adapters/story"
import { Link, useNavigate } from "react-router-dom"

const YourStories = () => {
  const navigate = useNavigate()
  const scrollDivRef = useRef()
  const [stories, setStories] = useState([])

  const allStoryData = async () => {
    const data = await getAllStoryData()
    console.log("as",data)
    setStories(data)
  }

  const slide = (shift) => {
    scrollDivRef.current.scrollLeft += shift
  }

  useEffect(() => {
    allStoryData()
  }, [])

  return (
    <div className="">
      <div className="flex justify-between items-center py-4">
        <h1 className="font-bold text-3xl">Your Stories</h1>
        <div className="flex items-center gap-4">
          <button
            className="p-3 hover:bg-gray-200 rounded-full"
            onClick={() => slide(-80)}
          >
            <img src={left} alt="" />
          </button>
          <button
            className="p-3 hover:bg-gray-200 rounded-full"
            onClick={() => slide(80)}
          >
            <img src={right} alt="" />
          </button>
          <Link
            to="/saved"
            className="text-ssorange ml-6 hover:bg-gray-200 p-3 rounded-lg"
          >
            {"View All  >"}
          </Link>
        </div>
      </div>

      <div
        className="flex gap-4 items-center my-4 w-full overflow-auto"
        ref={scrollDivRef}
      >
        {stories.map((story, index) => (
          <div
            style={{
              backgroundImage: `url(${story.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() =>
              (window.location.href = `${window.location.href}editor/${story.id}`)
            }
            key={story.id}
            className="border border-gray-200 h-64 w-auto p-16 rounded-lg object-fill"
          ></div>
        ))}
      </div>
    </div>
  )
}

export default YourStories
