
const exportIcon = <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.875 7.125L11.75 4.25V16.25C11.75 17 12.25 17.5 13 17.5C13.75 17.5 14.25 17 14.25 16.25V4.25L17.125 7.125C17.625 7.625 18.375 7.625 18.875 7.125C19.375 6.625 19.375 5.875 18.875 5.375L13.875 0.375C13.75 0.25 13.625 0.125 13.5 0.125C13.25 -7.45058e-09 12.875 -7.45058e-09 12.5 0.125C12.375 0.125 12.25 0.25 12.125 0.375L7.125 5.375C6.625 5.875 6.625 6.625 7.125 7.125C7.625 7.625 8.375 7.625 8.875 7.125ZM24.25 15C23.5 15 23 15.5 23 16.25V21.25C23 22 22.5 22.5 21.75 22.5H4.25C3.5 22.5 3 22 3 21.25V16.25C3 15.5 2.5 15 1.75 15C1 15 0.5 15.5 0.5 16.25V21.25C0.5 23.375 2.125 25 4.25 25H21.75C23.875 25 25.5 23.375 25.5 21.25V16.25C25.5 15.5 25 15 24.25 15Z" fill="#393939" />
</svg>

export default function HeroImage({ img, title, content }) {
    return (
        <>
            <div className={`w-full bg-[url('${img}')] bg-cover bg-center md:py-[107px]`} >
                <div className="px-4 py-10 md:px-10 lg:px-20">
                    {/* Hero Section UI */}
                    <h1 className="font-semibold text-center text-[28px] md:leading-16 md:text-6xl md:mb-8">{title}</h1>
                    <p className="text-center text-sm w-full md:w-[86%] md:text-xl leading-6 font-normal mx-auto">{content}</p>

                    {/* img section */}
                    <div className="mt-[30px] md:mt-[50px]">
                        <img src="/Rectangle 442.png" alt="" className="w-full mx-auto bg-cover" />
                    </div>

                    {/* button section */}
                    <div className="mt-[30px] md:mt-[60px] w-fit mx-auto flex gap-4 justify-center items-center">
                        <button className="flex items-center gap-2 px-4 py-2 md:px-8 md:py-4 md:text-xl font-bold bg-white border rounded-full hover:shadow-xl transition-shadow ">
                            Start a <img src="/logo.png" alt="..." className="w-[47.12px] md:w-auto " />
                        </button>
                        <button className="flex items-center px-4 py-2 md:px-8 md:py-4 text-sm md:text-xl font-bold bg-white border rounded-full hover:shadow-xl transition-shadow ">
                            Donate Now
                        </button>
                        <button className="shareBtns flex items-center px-4 py-2 md:px-8 md:py-4 text-sm md:text-xl font-bold bg-white border rounded-full hover:shadow-xl transition-shadow ">
                            {exportIcon}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}