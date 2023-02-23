import React from "react"
import Provider from "./Provider"
import Container from "./Container"
import DesignEditor from "./views/DesignEditor"
import "./styles/styles.css"

const DesignEditorMain = () => {
	return (
		<Provider>
			<Container>
				<DesignEditor />
			</Container>
		</Provider>
	)
}

export default DesignEditorMain
