import React from "react"
import Navbar2 from "../components/shared/Navbar2"

const EditorLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="">
			{/* <Navbar2 /> */}
			{children}
		</div>
	)
}

export default EditorLayout
