import React from "react"
import { Link } from "react-router-dom"
import create from "../../assets/Create_icon.svg"

const CreateStory = () => {
	return (
		<div className="">
			<h1 className="font-bold text-3xl py-2">Create Your Own Story</h1>
			<p className="text-gray-400 text-sm">
				Bring Your Ideas to Life with Our Easy-to-Use Creation Tool
			</p>

			<div className="flex gap-4 mt-4 py-4">
				<div className="bg-ssorange-light p-8 rounded-lg">
					<Link to="/editor" className="flex flex-col items-center">
						<img src={create} alt="" />
						<p className="text-ssorange">Create Stories</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CreateStory
