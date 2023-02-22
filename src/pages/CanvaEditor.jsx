import React from "react"
import EditorLayout from "../layouts/EditorLayout"
import ImageMapEditor from "../components/imagemap"

const CanvaEditor = () => {
	return (
		<EditorLayout>
			<div>
				<ImageMapEditor />
			</div>
		</EditorLayout>
	)
}

export default CanvaEditor
