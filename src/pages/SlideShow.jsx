import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Carousel from "../components/slideshow/Carousel"
import { createStore } from "polotno/model/store"
import { Workspace } from "polotno/canvas/workspace"
import axios from "axios"
import { getStorySlugData } from "../components/adapters/story"

const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
})

const carouselData = []

const getImage = async (Json) => {
  try {
    const loadedJson = await store.loadJSON(Json)
    for (let x of Json.pages) {
      let url = await store.toDataURL({ pageId: x.id })
      carouselData.push(url)
      // console.log(url)
    }
    // let url = await store.toDataURL({ pageId: store.pages[0].id });
    // carouselData.push(url)
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
  }

  useEffect(() => {
    storySlugData()
    // axios({
    //   method: "get",
    //   url: `/story/slug/${slug}/get/`,
    // })
    //   .then((res) => {
    //     setView(res.data.view_count)
    //     setTitle(res.data.title)
    //     getImage(res.data.json_data)
    //   })
    //   .then(() => {
    //     setLoading(false)
    //     console.log("Loading State False")
    //   })
  }, [])

  return (
    <div className="bg-gradient-to-r from-cta-brown to-cta-brown-tran backdrop-blur-3xl">
      {loading ? (
        <div></div>
      ) : (
        <>
          <Workspace store={store} />
          <Carousel data={carouselData} title={title} view={view} />
        </>
      )}
    </div>
  )
}

export default SlideShow
