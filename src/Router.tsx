import { BrowserRouter, Routes, Route } from "react-router-dom"
import DesignEditor from "~/views/DesignEditor"
import Home from "~/pages/Home"
import SavedStories from "~/pages/SavedStories"
import TemplatesList from "~/pages/TemplatesList"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/saved" element={<SavedStories />} />
				<Route path="/templates" element={<TemplatesList />} />
				<Route path="/editor" element={<DesignEditor />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
