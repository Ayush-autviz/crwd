import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className='h-screen  relative flex justify-center items-center bg-[url(authbg.svg)] bg-cover bg-no-repeat'>
            <div className='bg-white  shadow-[0px_0px_24px_1px_rgba(0,_0,_0,_0.1)] rounded-2xl px-4 py-6 md:px-10 md:py-6 flex flex-col justify-center items-center w-[90%] md:w-[55%] xl:w-[32%]'>
                <img src='crwd.png' className='h-6 sm:h-7 md:h-8' />
                <div className='text-[16px]  mb-1 sm:text-xl md:text-2xl font-semibold mt-5 text-[#373737]'>Create an account</div>
                <div className='text-[#393939] text-[10px] md:text-[14px]'>Already have an account? <span onClick={()=>{navigation('/login')}} className='underline cursor-pointer'>Sign in</span> </div>
                <input
                    className="w-full px-4 mt-4 py-3 md:py-3 text-[12px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none"
                    type="text"
                    name="cardNumber"
                    placeholder="First Name"
                />
                <input
                    className="w-full px-4 mt-4 py-3 md:py-3 text-[10px]   md:text-[14px] rounded-full border border-[#989898]  focus:outline-none "
                    type="text"
                    name="cardNumber"
                    placeholder="Last Name"
                />
                <input
                    className="w-full px-4 mt-4 py-3 md:py-3 text-[10px]   md:text-[14px] rounded-full border border-[#989898]  focus:outline-none"
                    type="text"
                    name="cardNumber"
                    placeholder="Email Address"
                />
                <div className="relative w-full mt-4 ">
                    <input
                        className="w-full px-4 py-3 md:py-3 text-[10px]   md:text-[14px] rounded-full border border-[#989898]  focus:outline-none"
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        className="absolute right-5 top-1/2  transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <EyeOff className="w-3 h-3 md:w-6 md:h-6" /> : <Eye className="w-6 h-6" />}
                    </button>
                </div>
                <button
                 onClick={()=>{navigation('/')}}
                    className="bg-[#393939] mt-4 text-[10px] md:text-[14px]  rounded-full cursor-pointer text-white py-3 md:py-3 w-full  hover:shadow-xl "
                >
                    Sign up
                </button>
                <div className='text-[#393939] text-center text-[10px] md:text-[14px] mt-4'>
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </div>
            </div>
        </div>
    )
}

export default Login
