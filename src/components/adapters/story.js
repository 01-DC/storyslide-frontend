import axios from 'axios';

export const postStoryData = (body, func) => {
    axios({
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        url: "http://127.0.0.1:8000/v1" + "/story/add/",
        data: body
    })
        .then((res) => func(res.data.data.id, res.data.data.json_data))
}

export const putStoryData = (body, id) => {
    axios({
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        url: "http://127.0.0.1:8000/v1" + `/story/${id}/update/`,
        data: body
    })
        .then((res) => console.log(res.data.data))

}