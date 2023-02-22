import React from "react"
import EditorLayout from "../layouts/EditorLayout"
import * as RDE from "react-design-editor"

const CanvaEditor = () => {
	return (
		<EditorLayout>
			<div>
				<RDE.Canvas  />
			</div>
		</EditorLayout>
	)
}

export default CanvaEditor
