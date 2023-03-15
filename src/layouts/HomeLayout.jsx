import React from "react"
import SideBar from "../components/shared/SideBar"

const HomeLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-span-5">
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default HomeLayout
