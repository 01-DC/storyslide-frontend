import React from "react"
import logo from "../../assets/Logo.svg"
import { Link, useNavigate } from "react-router-dom"
import Title from "../navbar/title"

const Navbar2 = ({ id, setShowModal }) => {
  const navigate = useNavigate()
  return (
    <div className="border-b-2 flex justify-between items-center px-4 py-2 bg-white">
      <div className="p-2 text-black text-lg font-bold flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" />
          Storyslide
        </Link>
        <p
          className="pl-5"
          style={{ fontWeight: "normal", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Home &gt;{" "}
        </p>
        <Title id={id} />
      </div>
      <div className="flex i  tems-center gap-4">
        <button
          className="bg-ssorange rounded-lg p-2 text-white"
          onClick={() => setShowModal(true)}
        >
          Generate Link
        </button>
      </div>
    </div>
  )
}

export default Navbar2
