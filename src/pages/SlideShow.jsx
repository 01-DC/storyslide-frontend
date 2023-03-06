import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Carousel from "../components/slideshow/Carousel"
import { createStore } from "polotno/model/store"
import { Workspace } from "polotno/canvas/workspace"
import axios from "axios"


const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
})


const carouselData = [

]

const getImage = async (Json) => {
  try {
    const loadedJson = await store.loadJSON(Json);
    for (let x of Json.pages) {
      let url = await store.toDataURL({ pageId: x.id });
      carouselData.push(url)
      // console.log(url)
    }
    // let url = await store.toDataURL({ pageId: store.pages[0].id });
    // carouselData.push(url)
  } catch (e) {
    console.log(e);
  }
};

const SlideShow = () => {
  const { slug } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/v1" + `/story/slug/${slug}/get/`,
    }).then((res) => {
      getImage(res.data.json_data);
    })

  }, [])


  return (
    <div className="bg-gradient-to-r from-cta-brown to-cta-brown-tran backdrop-blur-3xl">
      <Workspace store={store} />
      <Carousel data={carouselData} />

    </div>
  )
}

export default SlideShow
