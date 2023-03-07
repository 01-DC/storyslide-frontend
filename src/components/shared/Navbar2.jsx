import React from "react"
import logo from "../../assets/Logo.svg"
import upgrade from "../../assets/Groupupgrade.svg"
import { useNavigate } from "react-router-dom"
import Title from "../navbar/title"

const Navbar2 = ({ id, setShowModal }) => {
  const navigate = useNavigate()
  return (
    <div className="sticky top-0 border-b-2 flex justify-between items-center px-4 py-2 bg-white">
      <div className="p-2 text-black text-lg font-bold flex items-center gap-2">
        <img src={logo} alt="" />
        Storyslide
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
        <button className="bg-yellow-100 border border-yellow-800 text-yellow-800 p-2 rounded-lg flex gap-1 items-center">
          <img src={upgrade} alt="" />
          Upgrade
        </button>
        <div className="rounded-full bg-gray-200 w-8 h-8">P</div>
      </div>
    </div>
  )
}

export default Navbar2
