import React from "react"
import { Link } from "react-router-dom"
import create from "../../assets/Create_icon.svg"
import image from "/default_thumbnail.png"
import { postStoryData } from "../adapters/story"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

let data = new FormData()
data.append("title", "")
data.append("json_data", "{  }")

const CreateStory = () => {
  useEffect(() => {
    fetch(image)
      .then((response) => response.blob())
      .then((blob) => {
        data.append("thumbnail", blob, "thumbnail.png")
      })
  }, [])

  const navigate = useNavigate()

  return (
    <div className="">
      <h1 className="font-bold text-3xl py-2">Create Your Own Story</h1>
      <p className="text-gray-400 text-sm">
        Bring Your Ideas to Life with Our Easy-to-Use Creation Tool
      </p>

      <div className="flex gap-4 mt-4 py-4">
        <div
          className="bg-ssorange-light p-8 rounded-lg cursor-pointer text-center"
          onClick={() =>
            postStoryData(data, (id, json) => navigate(`/editor/${id}`))
          }
        >
          <img src={create} alt="" />
          <p className="text-ssorange">Create Stories</p>
        </div>
      </div>
    </div>
  )
}

export default CreateStory
