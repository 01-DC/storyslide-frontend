import Provider from "./Provider"
import Router from "./Router"
import Container from "./Container"
import "./styles/styles.css"
import DesignEditor from "~/views/DesignEditor"

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
