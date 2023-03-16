import React, { useState } from "react"
import Navbar2 from "../components/shared/Navbar2"
import Modal from "../components/shared/Modal"

const EditorLayout = ({ children, id, slugVal }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="h-[92vh]">
      {showModal && <Modal setShowModal={setShowModal} slugVal={slugVal} />}
      <Navbar2 id={id} setShowModal={setShowModal} />
      {children}
    </div>
  )
}

export default EditorLayout
