import React, { useState, useEffect } from 'react';
import { putStoryData } from '../adapters/story';
import axios from 'axios';

function Title({ id }) {
    const [inputValue, setInputValue] = useState("");
    const [vis, setVis] = useState(false)

    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/v1" + `/story/${id}/get/`,
        }).then((res) => {
            if (res.data.title != "") {
                setInputValue(res.data.title)
            } else {
                let data = new FormData()
                data.append("title", 'My Project ' + id)
                setInputValue("My Project " + id)
                putStoryData(data, id)
            }
        })

    }, [])

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log(event.target.value)
            setInputValue(event.target.value);
            let data = new FormData()
            data.append("title", event.target.value)
            putStoryData(data, id)
            setVis(false)
        }
    };

    return (
        <div style={{ fontWeight: "normal" }}>
            {vis ? <input
                id="text-input"
                type="text"
                placeholder={inputValue}
                onKeyPress={handleKeyPress}
                className="rounded py-1 px-2 mb-0 w-full"
            /> : <u onClick={() => setVis(true)} className="  mt-0">{inputValue}</u>}
        </div>
    );
}

export default Title;
