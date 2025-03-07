
import { useState } from "react"

import { Pencil, X } from "lucide-react"



export default function Modal1({isModalOpen,setIsModalOpen}) {
 // const [isModalOpen, setIsModalOpen] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Larry Hudlemeyr",
    role: "Office Worker",
    location: "Los Angles, Calefornía, USA",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%202.44.57%E2%80%AFPM-4X9S38GWfTuo5NhEOy5ppa1yyVShNC.png",
  })



  const [formData, setFormData] = useState(profileData)

  const handleSubmit = (e) => {
    e.preventDefault()
    setProfileData(formData)
    setIsModalOpen(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div >
      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative animate-fade-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full flex justify-center items-center my-5">
            <div className=" relative">
            <img src='profile.svg' className='w-18 h-18  md:w-25 md:h-25' />
            <div className="rounded-full absolute bottom-0 right-0 p-1 bg-[#393939]">
            <Pencil color="#fff" className="h-4 w-4 "/>
            </div>
            </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                          <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>What is the name of your CRWD?</div>

          <input
            className="w-full px-4 mt-2 py-3 md:py-3 text-[14px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none "
            type="text"
            name="name"
            onChange={handleChange}
            
            value={formData.name}
          />
              </div>

              <div>
              <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>Role</div>

<input
  className="w-full px-4 mt-2 py-3 md:py-3 text-[14px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none "
  type="text"
  name="role"
  onChange={handleChange}
 
  value={formData.role}
/>
              </div>

              <div>
              <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>Location</div>

<input
  className="w-full px-4 mt-2 py-3 md:py-3 text-[14px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none "
  type="text"
  name="location"
  onChange={handleChange}

  value={formData.location}
/>
              </div>



              <button
                    className="bg-[#393939] mt-4 text-[14px] md:text-[16px]  rounded-full cursor-pointer text-white py-3 md:py-3 w-full   "
                >
                    Save
                </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

