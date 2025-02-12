import React from 'react'

const Login = () => {
  return (
    <div className='h-screen  relative flex justify-center items-center'>
        <img src='authbg.svg' className='h-full -z-10 w-full absolute inset-0'/>
        <div className='bg-white shadow-xl rounded-2xl p-10 flex flex-col justify-center items-center w-[50%] md:w-[30%]'>
            <img src='crwd.png' className='h-10'/>
            <div className='text-[40px] font-semibold mt-7'>Welcome</div>
            <div className='text-[#393939] text-[20px]'>Log in to CRWD to continue</div>
            <button className="bg-white border py-2 w-full rounded-full mt-6 flex gap-2 justify-center items-center text-[#393939] text-[20px] ">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="28px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                Login with Google
            </button>

            <div className="mt-6 flex w-full  justify-center gap-2 items-center text-[#000]">
              <hr className="border-[#989898] w-full" />
              <p className="text-center text-sm ">OR</p>
              <hr className="border-[#98989] w-full" />
            </div>

            <input
                className="w-full px-4 mt-5 py-2 text-[20px] rounded-full border  focus:outline-none "
                type="text"
                name="cardNumber"
                placeholder="Email Address"
            />

            <button
                className="bg-[#393939] mt-5 text-[20px] rounded-full cursor-pointer text-white py-3 w-full  hover:shadow-xl "
              >
                Continue
            </button>

            <div className='text-[#393939] text-[16px] font-normal mt-5'>
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>





        </div>
      
    </div>
  )
}

export default Login
