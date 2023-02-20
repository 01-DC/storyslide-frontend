import React from "react"
import { NavLink } from "react-router-dom"
import temp from "../../assets/Temp.svg"
import saved from "../../assets/Saved.svg"
import home from "../../assets/Home_icon.svg"

const SideBar = () => {
	return (
		<div className="h-screen fixed top-0 left-0 border-r-2">
			<div class="">
				<ul class="space-y-2">
					<li className="w-full">
						<NavLink
							to="/"
							class="flex items-center p-2 text-base font-normal rounded-lg">
							<img src={home} alt="" />
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/saved"
							class="block flex items-center p-2 text-base font-normal rounded-lg">
							<img src={saved} alt="" />
							<span class="flex-1 ml-3 whitespace-nowrap">
								Saved
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/templates"
							class="block flex items-center p-2 text-base font-normal rounded-lg">
							<img src={temp} alt="" />
							<span class="flex-1 ml-3 whitespace-nowrap">
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
