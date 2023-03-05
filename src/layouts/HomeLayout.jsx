import React from "react"
import Navbar from "../components/shared/Navbar"
import SideBar from "../components/shared/SideBar"

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
