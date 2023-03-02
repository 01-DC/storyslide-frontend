import axios from 'axios';

export const postStoryData = (body, func) => {
    axios({
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        url: "http://127.0.0.1:8000/v1" + "/story/add/",
        data: body
    })
        .then((res) => console.log(res.data.data))
}

export const putStoryData = (body,id) => {
    axios({
        method: 'put',
        url: "http://127.0.0.1:8000/v1" + `/story/${id}/update/`,
        data: JSON.stringify(body)
    })
        .then((res) => console.log(res.data.data))

}