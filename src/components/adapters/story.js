import { getAxios } from "../../scripts/sdk-client"
const axios = getAxios()
axios.defaults.baseURL = "https://storiez-shukapurv-n3of.live.cohesive.so/v1/"

export const postStoryData = async (body, func) => {
  try {
    const res = await axios.post("/story/add/", body, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    func(res.data.data.id, res.data.data.json_data)
  } catch (error) {
    console.log(error)
  }
}

export const putStoryJSONData = async (body, id) => {
  try {
    const res = await axios.put(`/story/${id}/update/`, body, {
      headers: { "Content-Type": "application/json" },
    })
    // console.log(res.data.data)
  } catch (error) {
    console.log(error)
  }
}

export const putStoryData = async (body, id) => {
  try {
    const res = await axios.put(`/story/${id}/update/`, body, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    // console.log(res.data.data)
  } catch (error) {
    console.log(error)
  }
}

export const getStoryData = async (id) => {
  try {
    const res = await axios.get(`/story/${id}/get/`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const postSlideData = async (id, body) => {
  try {
    const res = await axios.post(`/story/${id}/slide/add/`, body, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    // console.log(res.data.data)
  } catch (error) {
    console.log(error)
  }
}

export const putSlideData = async (story_id, slug, body) => {
  try {
    const res = await axios.put(`/story/${id}/slide/${slug}/`, body, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    console.log(res.data.data)
  } catch (error) {
    console.log(error)
  }
}

export const getSlideData = async (id, slug, func, func1) => {
  try {
    const res = await axios.get(`/story/${id}/slide/${slug}/`)
    func(res.data)
  } catch (error) {
    console.log(error)
    func1()
  }
}

export const getAllStoryData = async () => {
  try {
    const res = await axios.get("/story/all/")
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getStorySlugData = async (slug) => {
  try {
    const res = await axios.get(`/story/slug/${slug}/get/`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
