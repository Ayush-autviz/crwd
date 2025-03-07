
import { useState } from "react"

import { Pencil, X } from "lucide-react"



export default function Modal2({isModalOpen,setIsModalOpen}) {
 // const [isModalOpen, setIsModalOpen] = useState(false)
  const [profileData, setProfileData] = useState({
    firstname: "Larry Hudlemeyr",
    lastname: "Office Worker",
    website: "Los Angles, Calefornía, USA",
    bio:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
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

            </div>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                          <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>What is the name of your CRWD?</div>

          <input
            className="w-full px-4 mt-2 py-3 md:py-3 text-[14px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none "
            type="text"
            name="firstname"
            onChange={handleChange}
            
            value={formData.firstname}
          />
              </div>

              <div>
              <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>Role</div>

<input
  className="w-full px-4 mt-2 py-3 md:py-3 text-[14px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none "
  type="text"
  name="lastname"
  onChange={handleChange}
  
  value={formData.lastname}
/>
              </div>

              <div>
              <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>Location</div>

<input
  className="w-full px-4 mt-2 py-3 md:py-3 text-[14px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none "
  type="text"
  name="website"
  onChange={handleChange}
  
  value={formData.website}
/>
              </div>

              <div>
              <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>Bio</div>

<textarea
  className="w-full px-4 mt-2 py-3 md:py-3 text-[14px] resize-none  md:text-[16px] rounded-3xl border border-[#989898]   focus:outline-none "
  type="text"
  name="bio"
  
  onChange={handleChange}
  rows={3}
  
  value={formData.bio}
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

