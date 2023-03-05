import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SavedStories from "./pages/SavedStories"
import TemplatesList from "./pages/TemplatesList"
import CanvaEditor from "./pages/CanvaEditor"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedStories />} />
        <Route path="/templates" element={<TemplatesList />} />
        <Route path="/editor" element={<CanvaEditor />} />
      </Routes>
    </div>
  )
}

export default App
