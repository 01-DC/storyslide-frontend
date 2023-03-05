import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SavedStories from "./pages/SavedStories"
import TemplatesList from "./pages/TemplatesList"
import CanvaEditor from "./pages/CanvaEditor"
import SlideShow from "./pages/SlideShow"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<CanvaEditor />} />
        <Route path="/saved" element={<SavedStories />} />
        <Route path="/story/:slug" element={<SlideShow />} />
        <Route path="/templates" element={<TemplatesList />} />
      </Routes>
    </div>
  )
}

export default App
