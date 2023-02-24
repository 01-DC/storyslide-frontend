import ReactDOM from "react-dom/client"
import Provider from "./Provider"
import Router from "./Router"
import Container from "./Container"
import "./index.css"
import "./styles/styles.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider>
		<Container>
			<Router />
		</Container>
	</Provider>
)
