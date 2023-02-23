import React from "react"
import DesignEditorMain from "../design-editor/DesignEditorMain"
import EditorLayout from "../layouts/EditorLayout"
// import ImageMapEditor from "../components/imagemap"

const CanvaEditor = () => {
	return (
		<EditorLayout>
			<div>
				{/* <ImageMapEditor /> */}
				<DesignEditorMain />
			</div>
		</EditorLayout>
	)
}

export default CanvaEditor
