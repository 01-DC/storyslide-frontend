import React from "react"
import SideBar from '../components/Shared/SideBar'

const HomeLayout = ({ children }) => {
	return <div className="grid grid-cols-5">
		<div className="col-span-1">
		<SideBar />

		</div>
		<div className="col-span-4 p-6">
		{children}

		</div>
	</div>
}

export default HomeLayout
