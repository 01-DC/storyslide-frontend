import Timeline from "./Timeline"
import Common from "./Common"
import { Block } from "baseui/block"
import React from "react"

const Video = () => {
	return (
		<Block $style={{ background: "#ffffff" }}>
			<Timeline />
			<Common />
		</Block>
	)
}

export default Video
