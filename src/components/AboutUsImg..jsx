import { Share } from "lucide-react";
import { useNavigate } from "react-router-dom";



export default function AboutUsImg({ img, title, content }) {
    const navigation = useNavigate();
    return (
        <>
            <div className={`md:py-[50px] md:pt-[50px]`} >
                <div className="px-4 py-10 md:px-10 lg:px-20">    
                    <h1 className="text-2xl text-center md:text-5xl font-bold text-[#393939] mb-2">Helping people help each other</h1>
                    <div className="mt-[30px] md:mt-[50px]">
                    <img src="/Rectangle 442.png" alt="" className="w-full mx-auto bg-cover" />
                    </div>
                </div>
            </div>
        </>
    )
}