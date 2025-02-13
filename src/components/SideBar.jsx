import { ChevronRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const navigation = useNavigate();

  return (
    <>
      {/* Backdrop for blur effect */}
      <div
        className={`fixed inset-0 z-60 bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose} // Close sidebar when clicking outside
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed z-70 top-0 right-0 h-full max-w-[80%] bg-white rounded-l-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div
            onClick={onClose}
            className="h-10 w-10 float-right hover:bg-[#F3F3F2] cursor-pointer justify-center items-center flex rounded-full"
          >
            <X color="#000" className="h-7 w-7" />
          </div>
          <div className="flex flex-col gap-4 mt-15">
            <div className="flex flex-row justify-between cursor-pointer hover:bg-[#F3F3F2] rounded-xl items-center px-2 py-4">
              <div className="flex flex-col ">
                <div>Donate</div>
                <div className="text-gray-400">Discover Fundraiser to support</div>
              </div>
              <ChevronRight />
            </div>

            <div className="flex flex-row justify-between cursor-pointer hover:bg-[#F3F3F2] rounded-xl items-center px-2 py-4">
              <div className="flex flex-col ">
                <div>About</div>
                <div className="text-gray-400">How it works Pricing and More</div>
              </div>
              <ChevronRight />
            </div>

            <div className="flex flex-row justify-between cursor-pointer hover:bg-[#F3F3F2] rounded-xl items-center px-2 py-4">
              <div className="flex flex-col ">
                <div>Help Center</div>
                <div className="text-gray-400">Technical support and help</div>
              </div>
              <ChevronRight />
            </div>
            <div className="flex justify-center  items-center">
              <div onClick={()=>{navigation('/login')}} className="px-10 py-1 h-11 w-full bg-[#393939] flex justify-center  items-center text-white border cursor-pointer rounded-full   transition-shadow">
                Sign in
              </div>
            </div>
            <button onClick={()=>{navigation('/start')}}  className="cursor-pointer justify-center h-11 w-full items-center px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 transition-shadow duration-200 border border-black">
              <div className="text-nowrap font-black text-[16px] ">Start a</div>
              <img className="h-[13px] ms-[-3px] object-contain" src="crwd.png"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
