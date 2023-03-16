import React, { useRef } from "react"
import left from "../../assets/Pathleft.svg"
import right from "../../assets/Pathright.svg"
import { useEffect, useState } from "react"
import { getAllStoryData } from "../adapters/story"
import { Link, useNavigate } from "react-router-dom"
import link from "../../assets/Link.svg"

const base = "http://127.0.0.1:5173"

const YourStories = () => {
  const navigate = useNavigate()
  const scrollDivRef = useRef()
  const [stories, setStories] = useState([])

  const allStoryData = async () => {
    const data = await getAllStoryData()
    console.log("as", data)
    setStories(data)
  }

  const slide = (shift) => {
    scrollDivRef.current.scrollLeft += shift
  }

  useEffect(() => {
    allStoryData()
  }, [])

  if (stories?.length === 0) return <div />

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
        className="flex gap-8 items-center my-4 w-full overflow-auto"
        ref={scrollDivRef}
      >
        {stories?.map((story, index) => (
          <div key={story.id}>
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
              className="border border-gray-200 h-72 w-auto aspect-mobile p-16 rounded-lg object-fill cursor-pointer"
            ></div>
            <div className="flex justify-between py-2 items-center">
              <p className="font-semibold">{story.title}</p>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(`${base}/story/${story.slug}`)
                }
              >
                <img src={link} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default YourStories
