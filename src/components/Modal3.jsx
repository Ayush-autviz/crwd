
import { useState } from "react"

import { Eye, EyeOff, Pencil, X } from "lucide-react"



export default function Modal3({isModalOpen,setIsModalOpen}) {
 // const [isModalOpen, setIsModalOpen] = useState(false)
  const [profileData, setProfileData] = useState({
    email: "abc@gmail.com",
    contact: "8877927465",
    password: "123",
  })


  const [showPassword, setShowPassword] = useState(false)
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
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
                          <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>Email Id</div>

          <input
            className="w-full px-4 mt-2 py-3 md:py-3 text-[14px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none "
            type="text"
            name="email"
            onChange={handleChange}
            
            value={formData.email}
          />
              </div>

              <div>
              <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>Contact Number</div>

<input
  className="w-full px-4 mt-2 py-3 md:py-3 text-[14px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none "
  type="text"
  name="contact"
  onChange={handleChange}
 
  value={formData.contact}
/>
              </div>

              <div>
              <div className='text-[#393939] ml-4 text-[14px] md:text-[16px] font-semibold'>Password</div>

<div className="relative">
<input
  className="w-full px-4 mt-2 py-3 md:py-3 text-[14px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none "
  type={showPassword ? "text" : "password"}
  name="password"
  onChange={handleChange}

  value={formData.password}
/>
<button
                        type="button"
                        className="absolute right-5 top-1/2 mt-1  transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <EyeOff className="w-3 h-3 md:w-6 md:h-6" /> : <Eye className="w-6 h-6" />}
                    </button>
</div>
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

