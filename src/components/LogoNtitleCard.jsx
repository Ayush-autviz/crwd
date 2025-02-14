

const locationIcon = <svg  width="12" height="12" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>


export default function LogoNtitleCard({ data }) {

    return (
        <>
            <div className="my-[30px] md:mt-[100px] px-4 pt-10 md:px-10 lg:px-20" >
                <h1 className="text-2xl text-center md:text-5xl font-bold text-[#393939] mb-2">Nonprofits we support</h1>
                {/* Nonprofits we support */}
                <div className='grid grid-col-1 md:grid-cols-2 gap-4 md:gap-[30px] mt-10 mb-6'>
                    {data.map((i, index) => {
                        return (
                            <>
                                <div className="bg-[#F3F3F2] rounded-xl p-3 md:px-[25px] md:py-[15px] flex items-center gap-4 md:gap-11">
                                    <div className="bg-white px-3 py-2 md:px-7 md:py-5 h-ful flex justify-center items-center w-fit h-fit rounded-xl">
                                        <img src={i.img} alt="" className="w-[87.3px] h-[87.3px] md:w-[128px] md:h8-[128px] object-contain" />
                                    </div>
                                    <div className="">
                                        <h2 className="text-[#373737] font-semibold text-sm md:text-xl">{i.title}</h2>
                                        <p className="flex  items-center gap-1 md:gap-3 mt-2 ">
                                            <img src='location.svg' class="h-3 w-3 md:h-5 md:w-5"/>
                                            <span className=" text-[12px] md:text-[16px] md:text-lg ">{i.location}</span>
                                        </p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div></>
    )
}