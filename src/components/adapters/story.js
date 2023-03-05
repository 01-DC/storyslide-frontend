import axios from "axios";

export const postStoryData = (body, func) => {
  axios({
    method: "post",
    headers: { "Content-Type": "multipart/form-data" },
    url: "http://127.0.0.1:8000/v1" + "/story/add/",
    data: body,
  }).then((res) => func(res.data.data.id, res.data.data.json_data));
};

export const putStoryJSONData = (body, id) => {
  axios({
    method: "put",
    headers: { "Content-Type": "application/json" },
    url: "http://127.0.0.1:8000/v1" + `/story/${id}/update/`,
    data: body,
  }).then((res) => console.log(res.data.data));
};

export const putStoryData = (body, id) => {
  axios({
    method: "put",
    headers: { "Content-Type": "multipart/form-data" },
    url: "http://127.0.0.1:8000/v1" + `/story/${id}/update/`,
    data: body,
  }).then((res) => console.log(res.data.data));
};

export const getStoryData = (id, store) => {
  axios({
    method: "get",
    url: "http://127.0.0.1:8000/v1" + `/story/${id}/get/`,
  }).then((res) => {
    if (res.data.json_data) {
      store.loadJSON(res.data.json_data);
    }
  });
};

export const postSlideData = (id, body) => {
  axios({
    method: "post",
    headers: { "Content-Type": "multipart/form-data" },
    url: "http://127.0.0.1:8000/v1" + `/story/${id}/slide/add/`,
    data: body,
  });
};

export const putSlideData = (story_id, slug, body) => {
  axios({
    method: "put",
    headers: { "Content-Type": "multipart/form-data" },
    url: "http://127.0.0.1:8000/v1" + `/story/${id}/slide/${slug}/`,
    data: body,
  }).then((res) => console.log(res.data.data));
};

export const getSlideData = (id, slug, func, func1) => {
  axios({
    method: "get",
    url: "http://127.0.0.1:8000/v1" + `/story/${id}/slide/${slug}/`,
  })
    .then((res) => func(res.data))
    .catch((err) => func1);
};

export const getAllStoryData = (func) => {
  axios({
    method: "get",
    url: "http://127.0.0.1:8000/v1" + `/story/all/`,
  }).then((res) => {
    func(res.data.results);
    console.log(res.data.results);
  });
};
