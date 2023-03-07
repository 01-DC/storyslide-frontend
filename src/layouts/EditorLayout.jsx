import React from "react"
import Navbar2 from "../components/shared/Navbar2"

const EditorLayout = ({ children, id }) => {
  return (
    <div>
      <Navbar2 id={id} />
      {children}
    </div>
  )
}

export default EditorLayout
