import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SavedStories from "./pages/SavedStories"
import TemplatesList from "./pages/TemplatesList"

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/saved" element={<SavedStories />} />
				<Route path="/templates" element={<TemplatesList />} />
			</Routes>
		</div>
	)
}

export default App
