import axios from "axios"

export const postStoryData = async (body, func) => {
  try {
    const res = await axios.post("/story/add/", body, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    func(res.data.data.id, res.data.data.json_data)
  } catch (error) {
    console.log(error)
  }
  // axios({
  //   method: "post",
  //   headers: { "Content-Type": "multipart/form-data" },
  //   url: "http://127.0.0.1:8000/v1" + "/story/add/",
  //   data: body,
  // }).then((res) => func(res.data.data.id, res.data.data.json_data))
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
  // axios({
  //   method: "put",
  //   headers: { "Content-Type": "application/json" },
  //   url: "http://127.0.0.1:8000/v1" + `/story/${id}/update/`,
  //   data: body,
  // }).then((res) => console.log(res.data.data))
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
  // axios({
  //   method: "put",
  //   headers: { "Content-Type": "multipart/form-data" },
  //   url: "http://127.0.0.1:8000/v1" + `/story/${id}/update/`,
  //   data: body,
  // }).then((res) => console.log(res.data.data))
}

export const getStoryData = async (id) => {
  try {
    const res = await axios.get(`/story/${id}/get/`)
    return res.data
  } catch (error) {
    console.log(error)
  }
  // axios({
  //   method: "get",
  //   url: "http://127.0.0.1:8000/v1" + `/story/${id}/get/`,
  // }).then((res) => {
  //   if (res.data.json_data) {
  //     store.loadJSON(res.data.json_data)
  //   }
  // })
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
  // axios({
  //   method: "post",
  //   headers: { "Content-Type": "multipart/form-data" },
  //   url: "http://127.0.0.1:8000/v1" + `/story/${id}/slide/add/`,
  //   data: body,
  // })
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
  // axios({
  //   method: "put",
  //   headers: { "Content-Type": "multipart/form-data" },
  //   url: "http://127.0.0.1:8000/v1" + `/story/${id}/slide/${slug}/`,
  //   data: body,
  // }).then((res) => console.log(res.data.data))
}

export const getSlideData = async (id, slug, func, func1) => {
  try {
    const res = await axios.get(`/story/${id}/slide/${slug}/`)
    func(res.data)
  } catch (error) {
    console.log(error)
    func1()
  }
  // axios({
  //   method: "get",
  //   url: "http://127.0.0.1:8000/v1" + `/story/${id}/slide/${slug}/`,
  // })
  //   .then((res) => func(res.data))
  //   .catch((err) => func1)
}

export const getAllStoryData = async () => {
  try {
    const res = await axios.get("/story/all/")
    console.log(res.data.results)
    return res.data.results
  } catch (error) {
    console.log(error)
  }
  // axios({
  //   method: "get",
  //   url: "http://127.0.0.1:8000/v1" + `/story/all/`,
  // }).then((res) => {
  //   func(res.data.results)
  //   console.log(res.data.results)
  // })
}

export const getStorySlugData = async (slug) => {
  try {
    const res = await axios.get(`/story/slug/${slug}/get/`)
    return res.data
  } catch (error) {
    console.log(error)
  }
  // axios({
  //   method: "get",
  //   url: "http://127.0.0.1:8000/v1" + `/story/slug/${slug}/get/`,
  // }).then((res) => {
  //   func(res.data)
  // })
}
