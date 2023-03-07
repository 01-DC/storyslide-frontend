import React, { useEffect } from "react"
import left from "../../assets/Pathleft.svg"
import right from "../../assets/Pathright.svg"
import page from "../../../public/templates/page1.json"
import { postStoryData } from "../adapters/story"

const postFn = async (template) => {
  let data = new FormData()
  data.append("title", "")
  await fetch(`/templates/${template.json}`)
    .then(response => response.json())
    .then(jsonData => {
      data.append('json_data', JSON.stringify(jsonData));
    })
  await fetch(`/templates/${template.preview}`)
    .then((response) => response.blob())
    .then((blob) => {
      data.append("thumbnail", blob, "thumbnail.png")
    })

  postStoryData(data, (id) =>
    window.location.href = `${window.location.href}editor/${id}`
  )
}


const Templates = () => {

  return (
    <div className="">
      <div className="flex justify-between items-center py-4 ">
        <h1 className="font-bold text-3xl">Templates</h1>
        <div className="flex gap-4">
          <img src={left} alt="" />
          <img src={right} alt="" />
          <p className="text-ssorange ml-6">{"View All  >"}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center my-4 w-full overflow-auto">
        {(page.items).map((template, index) => (
          <div
            style={{
              backgroundImage: `url(/templates/${template.preview})`, backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            key={index}
            className="border border-gray-200 h-64 w-full p-10 rounded-lg"
            onClick={()=>postFn(template)}
          >

          </div>
        ))}
      </div>
    </div>
  )
}

export default Templates;
