import { ChevronRight, X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop for blur effect */}
      <div
        className={`fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose} // Close sidebar when clicking outside
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 right-0 h-full max-w-[80%] bg-white rounded-l-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
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
            <div className="flex justify-center items-center">
              <div className="px-10 py-2 w-fit border cursor-pointer rounded-full hidden md:block hover:shadow-xl transition-shadow">
                Sign in
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
