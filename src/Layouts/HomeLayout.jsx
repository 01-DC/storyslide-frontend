import React from "react"
import Navbar from "../components/Shared/Navbar"
import SideBar from "../components/Shared/SideBar"

const HomeLayout = ({ children }) => {
	return (
		<div className="grid grid-cols-5">
			<div className="col-span-1">
				<SideBar />
			</div>
			<div className="col-span-4">
				<Navbar />
				<div className="p-6">{children}</div>
			</div>
		</div>
	)
}

export default HomeLayout
