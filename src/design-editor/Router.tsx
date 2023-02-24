import { BrowserRouter, Routes, Route } from "react-router-dom"
import DesignEditor from "~/views/DesignEditor"
import Dashboard from "~/views/Dashboard"

const Router = () => {
	return (
		<Routes>
			<Route path="/manage" element={<Dashboard />} />
			<Route path="/" element={<DesignEditor />} />
		</Routes>
	)
}

export default Router
