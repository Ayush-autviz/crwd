import { ShareIcon } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReviewCards from "../components/ReviewCard";
import HeroImage from "../components/Herosection-img";
import AboutUs from '../components/AboutUs'
import LogoNtitleCard from '../components/LogoNtitleCard'
import AboutUsImg from "../components/AboutUsImg.";


const cardData = [
    {
        title: '$30 Billion',
        subheadng: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        
    },
    {
        title: '$30 Billion',
        subheadng: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        
    },
    {
        title: '$30 Billion',
        subheadng: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        
    }
]


export default function About() {
    return (
        <>
            <div className="mt-[70px]">
                <Header />

                <AboutUsImg/>

                <div className="flex flex-col md:flex-row justify-center items-center gap-10  w-full ">

                    <div className="flex flex-col items-center md:items-start  gap-3 max-w-[80%] md:max-w-[40%]  ">
                        <div className="text-[#373737] font-semibold text-xl  md:text-2xl">Mission</div>
                        <div className="text-[#373737]  font-semibold text-center md:text-left   text-xs md:text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  is simply dummy text of the printing and typesetting industry. </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-3 max-w-[80%] md:max-w-[40%]  ">
                        <div className="text-[#373737] font-semibold text-xl md:text-2xl">Vision</div>
                        <div className="text-[#373737]  font-semibold text-center md:text-left  text-xs md:text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  is simply dummy text of the printing and typesetting industry. </div>
                    </div>

                </div>

                <div className="text-2xl mt-12 md:mt-24    text-center md:text-5xl font-bold text-[#393939] mb-12">Look at our numbers</div>
                <div className="flex flex-col md:flex-row  gap-5 justify-center items-center">
                {
                    cardData.map((item)=>{
                           return  <div className="shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.1)] w-[90%] md:w-[27%] rounded-xl flex flex-col gap-4 justify-center items-center p-8">
                                   <div className="text-[#373737] font-semibold text-xl  md:text-2xl">{item.title}</div>
                                   <div className="text-[#373737] font-semibold text-xs text-center md:text-sm">{item.subheadng}</div>
                           </div>
                    })
                }
                </div>


                <div className="flex flex-col justify-center items-center gap-4">
                <div className="text-2xl mt-12 md:mt-24 text-center md:text-5xl w-[90%] font-bold text-[#373737] ">Your easy, powerful, and trusted home for help.</div>
                <div className="text-[#373737] text-center w-[80%] md:w-[70%] font-semibold text-xs  md:text-sm mb-12">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.Sed ut perspiciatis unde omnis iste natus error</div>
                </div>

                <div className="flex flex-col xl:flex-row gap-5 justify-center items-center mb-15">
                {
                    cardData.map((item)=>{
                           return  <div className="flex flex-row gap-5 w-[90%] xl:w-[27%] justify-center items-center p-5">
                                   <img src="heart.svg" className="h-15 w-15"/>
                                   <div>
                                   <div className="text-[#373737] font-semibold text-xl  md:text-2xl">{item.title}</div>
                                   <div className="text-[#373737] font-semibold text-xs  md:text-sm">{item.subheadng}</div>
                                   </div>
                           </div>
                    })
                }
                </div>
                
                

                <Footer />
            </div >
        </>
    )
}