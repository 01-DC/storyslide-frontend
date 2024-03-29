import React, { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import image from "/default_thumbnail.png"
import temp from "../../assets/Temp.svg"
import saved from "../../assets/Saved.svg"
import home from "../../assets/Home_icon.svg"
import stories from "../../assets/Stories_icon.svg"
import logo from "../../assets/Logo.svg"
import { postStoryData } from "../adapters/story"

const data = new FormData()
data.append("title", "")
data.append("json_data", "{}")

const createNewEditor = async () => {
  const res = await fetch(image)
  const blob = await res.blob()
  data.append("thumbnail", blob, "thumbnail.png")
}

const SideBar = () => {
  useEffect(() => {
    createNewEditor()
  }, [])

  const navigate = useNavigate()

  return (
    <div className="h-full min-h-screen border-r-2">
      <div className="sticky top-0 left-0 pt-2">
        <ul className="space-y-2 px-2">
          <li className="p-2 text-black text-lg font-bold flex items-center gap-2 mb-8">
            <img src={logo} alt="" />
            Storyslide
          </li>
          <li>
            <NavLink
              onClick={() =>
                postStoryData(data, (id, json) => navigate(`/editor/${id}`))
              }
              className="bg-ssorange rounded-lg p-2 text-white flex items-center gap-2"
            >
              <img src={stories} alt="" />
              Create Stories
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200 ${
                  isActive ? "bg-ssorange-light" : ""
                }`
              }
            >
              <img src={home} alt="" />
              <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved"
              className={({ isActive }) =>
                `flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200 ${
                  isActive ? "bg-ssorange-light" : ""
                }`
              }
            >
              <img src={saved} alt="" />
              <span className="flex-1 ml-3 whitespace-nowrap">Saved</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates"
              className={({ isActive }) =>
                `flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200 ${
                  isActive ? "bg-ssorange-light" : ""
                }`
              }
            >
              <img src={temp} alt="" />
              <span className="flex-1 ml-3 whitespace-nowrap">Templates</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
