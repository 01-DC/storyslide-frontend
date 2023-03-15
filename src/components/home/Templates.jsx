import React, { useRef } from "react"
import { Link } from "react-router-dom"
import left from "../../assets/Pathleft.svg"
import right from "../../assets/Pathright.svg"
import page from "../../templates/page1.json"
import { postStoryData } from "../adapters/story"

const postFn = async (template) => {
  let data = new FormData()
  data.append("title", "")
  await fetch(`src/templates/${template.json}`)
    .then((response) => response.json())
    .then((jsonData) => {
      data.append("json_data", JSON.stringify(jsonData))
    })
  await fetch(`src/templates/${template.preview}`)
    .then((response) => response.blob())
    .then((blob) => {
      data.append("thumbnail", blob, "thumbnail.png")
    })

  postStoryData(
    data,
    (id) => (window.location.href = `${window.location.href}editor/${id}`)
  )
}

const Templates = () => {
  const scrollDivRef = useRef()

  const slide = (shift) => {
    scrollDivRef.current.scrollLeft += shift
  }

  return (
    <div className="">
      <div className="flex justify-between items-center py-4 ">
        <h1 className="font-bold text-3xl">Templates</h1>
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
            to="/templates"
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
        {page?.items?.map((template, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(src/templates/${template.preview})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="border border-gray-200 h-72 w-auto aspect-mobile p-16 rounded-lg object-fill cursor-pointer"
              onClick={() => postFn(template)}
            ></div>
            <p>{template.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Templates
