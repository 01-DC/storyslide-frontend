import React, { Component } from "react"
import left from "../../assets/Pathleft.svg"
import right from "../../assets/Pathright.svg"
import { useEffect, useState } from "react"
import { getAllStoryData } from "../adapters/story"
import axios from "axios"

const YourStories = () => {
	const [stories, setStories] = useState([])

	useEffect(() => {
		axios({
			method: "get",
			url: "http://127.0.0.1:8000/v1" + `/story/all/`,
		}).then((res) => { setStories(res.data.results) })
	}
		, [])
	return (
		<div className="">
			<div className="flex justify-between items-center py-4">
				<h1 className="font-bold text-3xl">Your Stories</h1>
				<div className="flex gap-4">
					<img src={left} alt="" />
					<img src={right} alt="" />

					<p className="text-ssorange ml-6"> {"View All >"}</p>
				</div>
			</div>

			<div className="flex gap-4 items-center my-4 w-full overflow-auto">
				{stories.map((story, index) => (
					<>

						<div
							key={story.id}
							className="border border-gray-200 h-44 w-10 p-10 rounded-lg">
							<img src={story.thumbnail} alt="" />
						</div>
					</>

				))}

			</div>
		</div>
	)
}

export default YourStories
