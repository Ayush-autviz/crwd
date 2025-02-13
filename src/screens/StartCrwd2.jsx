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
    <div className='h-screen md:p-8    w-screen relative flex justify-center items-center'>
      <img src='authbg.svg' className='h-full -z-10 w-full absolute inset-0' />

      <div className='bg-white shadow-xl border rounded-2xl px-4 py-6 md:p-10 flex flex-col justify-center items-center w-[90%] md:w-[55%] xl:w-[32%]'>
        <img src='crwd.png' className='h-8 sm:h-9 md:h-10' />
        <div className="mt-6 flex w-full  justify-center gap-2 items-center text-[#000]">
          <hr className="border-[#989898] w-full" />
        </div>
        <div className='flex flex-col justify-center w-full'>
          <div className=" text-[14px]  sm:text-xl md:text-2xl font-semibold  my-4">Choose Nonprofit(s)</div>
          <div className="relative w-full">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-3 py-2 border rounded-full flex items-center justify-between bg-white"
            >
              <div className="flex items-center gap-2">
                {selectedNonprofits.length === 0 ? (
                  <span className="text-gray-500 p-1 md:p-2 text-[13px] sm:text-[16px] md:text-xl ">Select nonprofits...</span>
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
              <div className="relative w-full mt-2 p-2 bg-white border border-[#E8E8E8] rounded-lg shadow-lg z-10">
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

          <div className="text-[14px]  sm:text-xl md:text-2xl font-semibold  my-4">Why are you raising money?</div>

          <div className="border  overflow-hidden rounded-3xl p-3">
            <div className="border-2 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-gray-500">
              <img src='upload.svg' className="w-8 h-8 mb-2" />
              <span className='text-[#808080] text-[13px] sm:text-[16px] md:text-xl'>Add Content</span>
            </div>
            <div className="flex gap-2 mt-4 bg-white">
              <button className="p-2 hover:bg-gray-100 rounded">
                <Bold className="w-4 h-4" strokeWidth={3} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Italic strokeWidth={3} className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Underline strokeWidth={3} className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Link strokeWidth={3} className="w-4 h-4" />
              </button>
            </div>
            <div className="my-1 px-[10px] flex w-full  justify-center gap-2 items-center text-[#000]">
              <hr className="border-[#999] w-full" />
            </div>
            <div className='my-2 px-3 text-[#393939] text-[11px]  sm:text-[14px] md:text-xl'>
              Create a philanthropy movement powered by your community. It’s  simple: choose a cause, invite friends, and make an impact
            </div>
          </div>
          <button
            className="bg-[#393939] mt-5 text-[14px]  sm:text-xl md:text-2xl rounded-full cursor-pointer text-white py-3 w-full   "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartCRWD2;



