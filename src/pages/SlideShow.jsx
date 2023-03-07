import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Carousel from "../components/slideshow/Carousel"
import { createStore } from "polotno/model/store"
import { Workspace } from "polotno/canvas/workspace"
import { getStorySlugData } from "../components/adapters/story"

const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
})

const carouselData = []
const links = []

const getImage = async (Json) => {
  try {
    const loadedJson = await store.loadJSON(Json)
    for (let x of Json.pages) {
      if (x.hasOwnProperty("custom")) links.push(x.custom)
      else links.push({ link: "", text: "" })

      let url = await store.toDataURL({
        pageId: x.id,
        quality: 0.5,
        pixelRatio: 0.5,
        mimeType: "image/jpeg",
      })
      carouselData.push(url)
    }
  } catch (e) {
    console.log(e)
  }
}

const SlideShow = () => {
  const { slug } = useParams()
  const [view, setView] = useState(0)
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(true)

  const storySlugData = async () => {
    const data = await getStorySlugData(slug)
    setView(data.view_count)
    setTitle(data.title)
    await getImage(data.json_data)
    setLoading(false)
    console.log("Loading State False")
    console.log(data)
    // console.log(carouselData)
    console.log(links)
  }

  useEffect(() => {
    storySlugData()
  }, [])

  return (
    <div className="bg-gradient-to-r from-cta-brown to-cta-brown-tran">
      <Workspace store={store} />
      {loading ? (
        <div></div>
      ) : (
        <Carousel data={carouselData} title={title} view={view} links={links} />
      )}
    </div>
  )
}

export default SlideShow
