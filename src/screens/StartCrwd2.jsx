import { Bold, ChevronDown, Italic, Link, Underline, Upload, X } from 'lucide-react'
import React, { useState } from 'react'

const nonprofits = [
  {
    id: "1",
    name: "American Cancer Society",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%203.19.33%E2%80%AFPM-Oqbdme1YJ9M6PC112qgZcz1aHjFBIv.png",
  },
]

const StartCRWD2 = () => {
  const [selectedNonprofits, setSelectedNonprofits] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [editorContent, setEditorContent] = useState("")


  const toggleNonprofit = (nonprofit) => {
    const exists = selectedNonprofits.find((n) => n.id === nonprofit.id)
    if (exists) {
      setSelectedNonprofits(selectedNonprofits.filter((n) => n.id !== nonprofit.id))
    } else {
      setSelectedNonprofits([...selectedNonprofits, nonprofit])
    }
  }

  const removeNonprofit = (id) => {
    setSelectedNonprofits(selectedNonprofits.filter((n) => n.id !== id))
  }

  return (
    <div className='h-screen  relative flex justify-center items-center bg-[url(authbg.svg)] bg-cover bg-no-repeat'>

      <div className='bg-white shadow-[0px_0px_24px_1px_rgba(0,_0,_0,_0.1)] rounded-2xl px-4 py-6 md:px-10 md:py-6  flex flex-col justify-center items-center w-[90%] md:w-[55%] xl:w-[32%]'>
        <img src='crwd.png' className='h-6 sm:h-7 md:h-8' />
        <div className="mt-5 flex w-full  justify-center gap-2 items-center text-[#000]">
          <hr className="border-[#989898] w-full" />
        </div>
        <div className='flex flex-col w-full mt-5'>
          <div className=" text-[#393939] text-[10px] md:text-[14px] font-semibold">Choose Nonprofit(s)</div>
          <div className="relative w-full">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 mt-2 py-3 md:py-3 text-[10px]   md:text-[14px]  border border-[#989898] rounded-full flex items-center justify-between bg-white"
            >
              <div className="flex items-center gap-2">
                {selectedNonprofits.length === 0 ? (
                  <span className="text-gray-500  text-[10px]   md:text-[14px] ">Select nonprofits...</span>
                ) : (
                  <div className="flex items-center gap-2 rounded-full border py-2 px-3 border-[#E8E8E8]">
                    <img src={selectedNonprofits[0].icon || "/placeholder.svg"} alt="" className="w-6 h-6" />
                    <span>{selectedNonprofits[0].name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removeNonprofit(selectedNonprofits[0].id)
                      }}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>

            {isDropdownOpen && (
              <div className="absolute w-full mt-2 p-2 bg-white border border-[#E8E8E8] rounded-lg shadow-lg z-10">
                {nonprofits.map((nonprofit) => (
                  <button
                    key={nonprofit.id}
                    onClick={() => toggleNonprofit(nonprofit)}
                    className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50"
                  >
                    <img src={nonprofit.icon || "/placeholder.svg"} alt="" className="w-6 h-6" />
                    <span>{nonprofit.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="text-[#393939] text-[10px] md:text-[14px] font-semibold mt-5">Why are you raising money?</div>

          <div className="border border-[#989898] mt-2 overflow-hidden rounded-3xl p-3">
            <div className="border-1 border-[#989898] border-dashed rounded-3xl p-6 flex flex-col items-center justify-center text-gray-500">
              <img src='upload.svg' className="w-6 h-6 mb-1" />
              <span className='text-[#808080] text-[10px] md:text-[14px] '>Add Content</span>
            </div>
            <div className="flex gap-2 mt-2 bg-white">
              <button className="p-2 hover:bg-gray-100 rounded text-[#393939]">
                <Bold className="w-4 h-4" strokeWidth={3} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded text-[#393939]">
                <Italic strokeWidth={3} className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded text-[#393939]">
                <Underline strokeWidth={3} className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded text-[#393939]">
                <Link strokeWidth={3} className="w-4 h-4" />
              </button>
            </div>
            <div className="my-1 flex w-full  justify-center gap-2 items-center text-[#000]">
              <hr className="border-[#999] w-full" />
            </div>
            <div className='text-[#393939] text-[10px] md:text-[14px] mt-2'>
              Create a philanthropy movement powered by your community. It’s  simple: choose a cause, invite friends, and make an impact
            </div>
          </div>
          <button
            className="bg-[#393939] mt-5 text-[10px] md:text-[14px]  rounded-full cursor-pointer text-white py-3 md:py-3 w-full  hover:shadow-xl  "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartCRWD2;



