
import { useState } from "react"

import { Menu, Search } from "lucide-react"
import Sidebar from "./SideBar"
import { useNavigate, useNavigation } from "react-router-dom"

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navigation = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <div className="h-[70px] fixed top-0 left-0 z-50 w-full bg-white  shadow px-4 md:px-10 lg:px-20 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-center gap-1">
        <div onClick={()=>{navigation('/search')}} className="h-8 w-8 hover:bg-[#F3F3F2] cursor-pointer justify-center items-center flex rounded-full">
         <Search color="#000" className="h-5 w-5"  />
         </div>
          <div className="hidden md:block text-[20px]">Search</div>
        </div>
        <img onClick={()=>{navigation('/')}}  src="crwd.png" alt="Logo" className="h-8 md:ml-15 cursor-pointer " />
        <div className="flex flex-row items-center gap-4 justify-center">
          <div onClick={()=>{navigation('/login')}} className="px-8 py-2 cursor-pointer border rounded-full hidden md:block hover:shadow-xl transition-shadow ">Sign in</div>
          <button onClick={toggleSidebar} className=" h-10 w-10 hover:bg-[#F3F3F2] cursor-pointer justify-center items-center flex rounded-full">
          <Menu color="#000" />
          </button>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}

export default Header

