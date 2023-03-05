import React from "react";
import upgrade from "../../assets/Groupupgrade.svg";

const Navbar = () => {
  return (
    <div className="sticky top-0 border-b-2 border-l-2 flex justify-end px-4 py-2 bg-white">
      <div className="flex items-center gap-4">
        <button className="bg-yellow-100 border border-yellow-800 text-yellow-800 p-2 rounded-lg flex gap-1 items-center">
          <img src={upgrade} alt="" />
          Upgrade
        </button>
        <div className="rounded-full bg-gray-200 w-8 h-8">P</div>
      </div>
    </div>
  );
};

export default Navbar;
