import { ShareIcon } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReviewCards from "../components/ReviewCard";
import HeroImage from "../components/Herosection-img";
import AboutUs from '../components/AboutUs'
import LogoNtitleCard from '../components/LogoNtitleCard'


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


export default function Atlanta() {
    return (
        <>
            <div className="mt-[70px]">
                <Header />

                <HeroImage img='background.png'
                    title='This group is to help Atlanta families'
                    content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.' />

                <AboutUs />

                <LogoNtitleCard data={cardData} />

                <div className="bg-[#F3F3F2]/55 py-6 md:py-[42px] mx-4 md:mx-0 rounded-xl md:rounded-none">
                    <h3 className="text-[#373737] text-[14px] md:text-xl font-medium text-center"> Location: Metro Atlanta, Georgia,</h3>
                </div>

                <ReviewCards />

                <Footer />
            </div >
        </>
    )
}