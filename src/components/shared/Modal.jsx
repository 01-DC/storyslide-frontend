import React, { useState } from "react"
import cross from "../../assets/Vectorcross.svg"
import copyIcon from "../../assets/Groupcopy.svg"
import tick from "../../assets/Shapestick.svg"

const base = "http://127.0.0.1:5173"

const Modal = ({ setShowModal, slugVal }) => {
  const [copied, setCopied] = useState(false)

  return (
    <div className="bg-black bg-opacity-80 fixed inset-0 z-50">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white rounded-lg min-w-[480px]">
          <h1 className="font-bold text-2xl border-b-2 py-3 px-4 flex justify-between items-center">
            <p>Your link is ready!</p>
            <button onClick={() => setShowModal(false)}>
              <img src={cross} />
            </button>
          </h1>
          <p className="mt-4 px-4">Copy this link and share with others.</p>
          <div className="m-4 p-2 border-2 rounded-lg flex justify-between items-center">
            <p>{`${base}/story/${slugVal}`}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`${base}/story/${slugVal}`)
                setCopied(true)
              }}
            >
              <img src={copied ? tick : copyIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
