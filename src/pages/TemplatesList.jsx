import React from "react"
import HomeLayout from "../layouts/HomeLayout"
import { postStoryData } from "../components/adapters/story"
import page from "../templates/page1.json"
import { useNavigate } from "react-router-dom"

const TemplatesList = () => {
  const navigate = useNavigate()

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

    postStoryData(data, (id) => navigate(`/editor/${id}`))
  }

  return (
    <HomeLayout>
      <div className="">
        <div className="flex justify-between items-center py-4 ">
          <h1 className="font-bold text-5xl">Templates</h1>
        </div>
        <div className="flex flex-wrap gap-4 items-center my-4 w-full">
          {page.items.map((template, index) => (
            <div
              style={{
                backgroundImage: `url(src/templates/${template.preview})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              key={index}
              className="border border-gray-200 h-96 aspect-mobile p-16 rounded-lg object-fill cursor-pointer"
              onClick={() => postFn(template)}
            ></div>
          ))}
        </div>
      </div>
    </HomeLayout>
  )
}

export default TemplatesList
