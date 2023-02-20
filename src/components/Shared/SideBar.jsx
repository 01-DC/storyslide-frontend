import React from "react"
import { NavLink } from "react-router-dom"
import temp from "../../assets/Temp.svg"
import saved from "../../assets/Saved.svg"
import home from "../../assets/Home_icon.svg"

const SideBar = () => {
	return (
		<div className="h-full min-h-screen border-r-2">
			<div className="fixed top-0 left-0">
				<ul className="space-y-2 px-2 my-2">
					<li className="">
						<NavLink
							to="/"
							className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-400">
							<img src={home} alt="" />
							<span className="flex-1 ml-3 whitespace-nowrap">
								Home
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/saved"
							className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-400">
							<img src={saved} alt="" />
							<span className="flex-1 ml-3 whitespace-nowrap">
								Saved
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/templates"
							className="block flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-400">
							<img src={temp} alt="" />
							<span className="flex-1 ml-3 whitespace-nowrap">
								Templates
							</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SideBar
