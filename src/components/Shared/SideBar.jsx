import React from 'react'
import temp from '../../assets/Temp.svg'
import saved from '../../assets/Saved.svg'
import home from "../../assets/Home_icon.svg"

const SideBar = () => {
  return (
    <div className = "w-[20vw] h-full border-r-2">
    
<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover: focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover: dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto dark:">
      <ul class="space-y-2">
        
         <li>
               <a href="#" class="flex items-center p-2 text-base font-normal rounded-lg">
               <img src = {home} alt = "" />
               <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li>
         <li>
         <a href="#" class="flex items-center p-2 text-base font-normal rounded-lg">
                <img src = {saved} alt = "" />
               <span class="flex-1 ml-3 whitespace-nowrap">Saved</span>
            </a>
            
         </li>
        <li>
                <a href="./Templates.jsx" class="flex items-center p-2 text-base font-normal rounded-lg">
                <img src = {temp} alt = "" />
                <span class="flex-1 ml-3 whitespace-nowrap">Templates</span>
                </a>
            </li>
      </ul>
   </div>
</aside>
</div>

  )
}

export default SideBar