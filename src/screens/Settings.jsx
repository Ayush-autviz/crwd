import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import Modal1 from '../components/Modal1'
import Modal2 from '../components/Modal2'
import Modal3 from '../components/Modal3'

const donations = [
    {
        title: 'Total Amount Donated',
        amount: '$191,101'
    },
    {
        title: 'Number of Donations',
        amount: '45'
    },
    {
        title: 'Date of Donation',
        amount: '04-Feb-2025'
    }
]

const details = [
    {
        title: 'First Name',
        value: 'Larry'
    },
    {
        title: 'Last Name',
        value: 'Hudlemeyer'
    },
    {
        title: 'Location',
        value: 'Los Angles, California, USA'
    },
    {
        title: 'Website',
        value: 'www.xyz.com'
    }
]

const Contactdetails = [
    {
        title: ' Email Id',
        value: 'abc@gmail.com'
    },
    {
        title: 'Contact Number',
        value: '8877927465'
    },
    {
        title: 'Password',
        value: '*************'
    }
]

const Settings = () => {
    const navigation = useNavigate();
    const [openModal1,setopenModal1] = useState(false);
    const [openModal2,setopenModal2] = useState(false);
    const [openModal3,setopenModal3] = useState(false);
    return (
        <div className='mt-[70px]'>
            <Header />
            <div className="flex flex-col justify-center items-center px-4 md:px-10 lg:px-20">

                <div className='flex flex-col justify-center items-center mt-20 mb-15 gap-4 '>
                    <div className="text-2xl md:text-5xl font-bold text-gray-900 ">Your CRWDS</div>
                    <div className="text-[#393939] text-[12px] text-center  md:text-xl">
                        Are you ready to be a leader who makes a difference
                    </div>
                    <button onClick={() => { navigation('/start') }} className="cursor-pointer h-11  w-full md:w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row justify-center  bg-white text-gray-900 transition-shadow duration-200 border border-black">
                        <div className="text-nowrap  font-black text-[16px] ">Start a</div>
                        <img className="h-[13px] ms-[-3px] object-contain" src="crwd.png" />
                    </button>
                </div>

                <div className="bg-[url('/bg-covers/bgimg.svg')] rounded-2xl w-full bg-cover bg-center bg-no-repeat p-5  md:p-7 ">
                    <div className='flex flex-col   w-full'>
                        <div className='font-semibold text-xl md:text-left text-center md:text-2xl text-white my-2'>Your Donations</div>
                        <div className='flex flex-row flex-wrap gap-[10%] w-full items-center'>
                            {
                                donations.map((item) => {
                                    return <div className='flex flex-col gap-2 mt-5'>
                                        <div className='font-semibold text-sm md:text-lg text-white'>
                                            {item.title}
                                        </div>
                                        <div className='font-light text-[11px] md:text-[15px] text-white'>
                                            {item.amount}
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>


                <div className='rounded-2xl border border-[#838383] w-full p-5 mt-10  md:p-7 '>
                    <div className='flex flex-row justify-between  w-full'>
                        <div className='flex flex-row items-center gap-5'>
                            <img src='profile.svg' className='w-15 h-15  md:w-25 md:h-25' />
                            <div className='flex-col flex gap-1'>
                                <div className='font-semibold text-sm md:text-lg'>
                                    Larry Hudlemeyr
                                </div>
                                <div className='font-light text-[#757575] text-[11px] md:text-[15px]'>
                                    Office Worker
                                </div>
                                <div className='font-light text-[#757575]  text-[11px] md:text-[15px]'>
                                    Los Angles, Calefornia, USA
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>{setopenModal1(true)}} className=' md:py-2 p-3 h-fit cursor-pointer rounded-full md:px-6 flex bg-[#393939] flex-row justify-center items-center gap-2'>
                            <img src='edit.svg' className='h-4 w-4 font-semibold' />
                            <div className='font-semibold hidden md:block  text-[11px] text-white md:text-[15px]'>Edit</div>
                        </div>
                    </div>
                </div>


                <div className='rounded-2xl border border-[#838383] w-full p-5 mt-10  md:p-7 '>
                    <div className='flex flex-row justify-between items-center  w-full'>
                        <div className='font-semibold text-xl md:text-left text-center md:text-2xl  my-2'>Your Profile</div>
                        <div  onClick={()=>{setopenModal2(true)}}  className=' md:py-2 cursor-pointer  h-fit rounded-full p-3 md:px-6 flex bg-[#393939] flex-row justify-center items-center gap-2'>
                            <img src='edit.svg' className='h-4 w-4 font-semibold' />
                            <div className='font-semibold hidden md:block text-[11px] text-white md:text-[15px]'>Edit</div>
                        </div>
                    </div>
                    <div className="my-3 flex w-full  justify-center gap-2 items-center text-[#000]">
                        <hr className="border-[#989898] w-full" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2 mt-5'>
                            <div className='font-semibold text-sm md:text-lg '>
                                Bio
                            </div>
                            <div className='font-light text-[#757575]  text-[11px] md:text-[15px] '>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                            </div>
                        </div>
                        <div className='flex flex-row flex-wrap gap-[10%] w-full items-center'>
                            {
                                details.map((item) => {
                                    return <div className='flex flex-col gap-2 mt-5'>
                                        <div className='font-semibold text-sm md:text-lg '>
                                            {item.title}
                                        </div>
                                        <div className='font-light text-[#757575]  text-[11px] md:text-[15px] '>
                                            {item.value}
                                        </div>
                                    </div>
                                })
                            }
                        </div>
{/* 
                        <div className="flex items-center gap-2 mt-5 ">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded-[4px] border-2 border-[#393939]  accent-[#393939]"
                            />
                            <div className="className='font-semibold text-sm md:text-lg">Nonprofits</div>
                        </div> */}



                    </div>
                </div>


                <div className='rounded-2xl border border-[#838383] w-full p-5 mt-10  md:p-7 mb-30 '>
                    <div className='flex flex-row justify-between items-center  w-full'>
                        <div className='font-semibold text-xl md:text-left text-center md:text-2xl  my-2'>Account Setting</div>
                        <div onClick={()=>{setopenModal3(true)}}  className=' md:py-2 p-3 cursor-pointer h-fit rounded-full md:px-6 flex bg-[#393939] flex-row justify-center items-center gap-2'>
                            <img src='edit.svg' className='h-4 w-4 font-semibold' />
                            <div className='font-semibold hidden md:block text-[11px] text-white md:text-[15px]'>Edit</div>
                        </div>
                    </div>
                    <div className="my-3 flex w-full  justify-center gap-2 items-center text-[#000]">
                        <hr className="border-[#989898] w-full" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row flex-wrap gap-[10%] w-full items-center'>
                            {
                                Contactdetails.map((item) => {
                                    return <div className='flex flex-col gap-2 mt-5'>
                                        <div className='font-semibold text-sm md:text-lg '>
                                            {item.title}
                                        </div>
                                        <div className='font-light text-[#757575] s text-[11px] md:text-[15px] '>
                                            {item.value}
                                        </div>
                                    </div>
                                })
                            }
                        </div>



                    </div>
                </div>



            </div>


            <Footer />
            <Modal1 isModalOpen={openModal1} setIsModalOpen={setopenModal1}  />
            <Modal2  isModalOpen={openModal2} setIsModalOpen={setopenModal2} />
            <Modal3 isModalOpen={openModal3} setIsModalOpen={setopenModal3} />
        </div>
    )
}

export default Settings
