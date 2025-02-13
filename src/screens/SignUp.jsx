import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className='h-screen  relative flex justify-center items-center'>
            <img src='authbg.svg' className='h-full -z-10 w-full absolute inset-0' />
            <div className='bg-white shadow-xl rounded-2xl px-4 py-6 md:p-10 flex flex-col justify-center items-center w-[90%] md:w-[55%] xl:w-[32%]'>
                <img src='crwd.png' className='h-8 sm:h-9 md:h-10' />
                <div className='text-[18px]  sm:text-2xl md:text-3xl font-semibold mt-7'>Create an account</div>
                <div className='text-[#393939] text-[14px]  sm:text-xl md:text-2xl font-semibold'>Already have an account? <span className='underlinne cursor pointer'>Sign in</span> </div>
                <input
                    className="w-full px-4 mt-5 py-2 text-[18px]  sm:text-2xl md:text-3xl rounded-full border  focus:outline-none "
                    type="text"
                    name="cardNumber"
                    placeholder="First Name"
                />
                <input
                    className="w-full px-4 mt-5 py-2 text-[18px]  sm:text-2xl md:text-3xl rounded-full border  focus:outline-none "
                    type="text"
                    name="cardNumber"
                    placeholder="Last Name"
                />
                <input
                    className="w-full px-4 mt-5 py-2 text-[18px]  sm:text-2xl md:text-3xl rounded-full border  focus:outline-none "
                    type="text"
                    name="cardNumber"
                    placeholder="Email Address"
                />
                <div className="relative w-full mt-5 ">
                    <input
                        className="w-full px-4  py-2 text-[18px] sm:text-2xl md:text-3xl rounded-full border focus:outline-none pr-12"
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                    </button>
                </div>
                <button
                    className="bg-[#393939] mt-5 text-[18px]  sm:text-2xl md:text-3xl  rounded-full cursor-pointer text-white py-3 w-full  hover:shadow-xl "
                >
                    Sign up
                </button>
                <div className='text-[#393939] text-[14px]  sm:text-xl md:text-2xl font-semibold mt-5'>
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </div>
            </div>
        </div>
    )
}

export default Login
