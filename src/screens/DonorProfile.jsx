import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import Divider from '../components/Divider';
import LogoNtitleCard from '../components/LogoNtitleCard';
import Footer from '../components/Footer';

const likedMember = [
    { id: 1, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww", alt: "Person 1" },
    { id: 2, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww", alt: "Person 2" },
    { id: 3, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww", alt: "Person 3" },
  ]

  const cardData = [
    {
        img: '/logos/georgia.png',
        title: `C5 Youth Foundation of Georgia`,
        location: `Atlanta, GA`,
    },
    {
        img: '/logos/silence.png',
        title: `C5 Youth Foundation of Georgia`,
        location: `Atlanta, GA`,
    },
    {
        img: '/logos/camp.png',
        title: `C5 Youth Foundation of Georgia`,
        location: `Atlanta, GA`,
    },
    {
        img: '/logos/georgia.png',
        title: `C5 Youth Foundation of Georgia`,
        location: `Atlanta, GA`,
    }
]

const DonorProfile = () => {
    const navigation = useNavigate();
    const richColors = [
        "#FF96AF", "#8B85FF", "#D4FFA8", "#CE9EFF", "#BDBDBD"
    ];

    const [currentColor, setCurrentColor] = useState(richColors[0]);

    // Function to get random color from array
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * richColors.length);
        setCurrentColor(richColors[randomIndex]);
    };
    return (
        <div className='mt-[70px] '>
            <Header />
            <div className='h-25 bg-[#616161] relative'>
                <div style={{ backgroundColor: currentColor }} className={`absolute top-[100%] shadow-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24  p-5 rounded-full flex justify-center items-center cursor-pointer   transition-colors duration-300 `}>  
                    <div
                        className={`h-14 w-14 text-4xl font-semibold flex justify-center items-center text-white `}
                        onClick={getRandomColor}
                    >
                        N
                    </div>
                </div>
            </div>
            <div className="text-2xl text-center  md:text-4xl text-[#373737] font-bold  mt-20">Natalie Root</div>

            <div className={`bg-[url('bgprofile.svg')] rounded-2xl flex flex-col justify-center items-center mt-10 p-8 mx-4 md:mx-10 lg:mx-20`}>
                <img src='profile1.svg' className='md:h-30 md:w-30 w-20 h-20 rounded-full'/>
                <div className="text-xl text-center  md:text-2xl text-white font-bold  mt-5">100+ Women Who Care- Pinellas Countyalie Root</div>
                <div className="w-[30%] h-[1px] mt-4 mb-2 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-px"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-[1px] w-3/4 mx-auto"></div>
    </div>
               <div className='text-white text-lg md:text-xl'> 378 Members</div>
                <div className="w-[30%] h-[1px] mt-2  relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-px"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-[1px] w-3/4 mx-auto"></div>
    </div>  

    <div className='text-sm text-center text-white  md:text-lg mt-4 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo </div>
    <div className="flex items-center justify-center  space-x-[-7px] md:space-x-[-10px] mt-5">
            {likedMember.map((member) => (
                                                <div key={member.id} className="relative w-7 h-7 md:w-10 md:h-10">
                                                    <img
                                                        src={member.image}
                                                        alt={member.alt}
                                                        className="w-full h-full object-cover rounded-full border-1 md:border-3 border-white shadow-lg"
                                                    />
                                                </div>
            ))}
    </div>





            </div>

            <LogoNtitleCard data={cardData} />

            <Footer/>

        </div>
    )
}

export default DonorProfile
