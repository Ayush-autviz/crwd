import { useNavigate } from "react-router-dom"

const likeIcon = <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.6648C11.6583 21.6648 11.3289 21.541 11.0722 21.3161C10.1026 20.4683 9.16789 19.6716 8.34317 18.9689L8.33895 18.9652C5.92105 16.9048 3.8331 15.1253 2.38035 13.3725C0.75642 11.4129 0 9.55492 0 7.52519C0 5.55316 0.676217 3.73381 1.90392 2.40209C3.14629 1.05462 4.85099 0.3125 6.70457 0.3125C8.08995 0.3125 9.35867 0.750499 10.4755 1.61422C11.039 2.05015 11.5499 2.58373 12 3.20609C12.4502 2.58373 12.9609 2.05015 13.5247 1.61422C14.6415 0.750499 15.9102 0.3125 17.2956 0.3125C19.149 0.3125 20.8538 1.05462 22.0962 2.40209C23.3239 3.73381 24 5.55316 24 7.52519C24 9.55487 23.2437 11.4129 21.6198 13.3723C20.167 15.1253 18.0792 16.9046 15.6617 18.9649C14.8355 19.6687 13.8993 20.4667 12.9276 21.3165C12.6708 21.5411 12.3412 21.6649 12 21.6648ZM6.70457 1.71837C5.24835 1.71837 3.91059 2.29957 2.93737 3.35496C1.94972 4.42634 1.40568 5.9073 1.40568 7.52519C1.40568 9.23228 2.04014 10.759 3.4627 12.4755C4.83763 14.1346 6.88274 15.8774 9.25067 17.8954L9.25503 17.899C10.0828 18.6045 11.0213 19.4043 11.998 20.2583C12.9805 19.4027 13.9204 18.6016 14.7498 17.895C17.1176 15.877 19.1625 14.1346 20.5374 12.4755C21.9598 10.759 22.5943 9.23228 22.5943 7.52519C22.5943 5.90725 22.0502 4.42629 21.0626 3.35496C20.0896 2.29957 18.7516 1.71837 17.2956 1.71837C16.2288 1.71837 15.2493 2.05751 14.3846 2.72618C13.6139 3.32238 13.077 4.07604 12.7622 4.60338C12.6004 4.87455 12.3155 5.03641 12 5.03641C11.6845 5.03641 11.3996 4.87455 11.2377 4.60338C10.9232 4.07604 10.3863 3.32238 9.61536 2.72618C8.75061 2.05751 7.77116 1.71837 6.70457 1.71837Z" fill="#393939" />
</svg>

const shareIcon = <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.02243 5.12094L9.09788 3.04549V11.7082C9.09788 12.2497 9.45883 12.6106 10.0002 12.6106C10.5417 12.6106 10.9026 12.2497 10.9026 11.7082V3.04549L12.9781 5.12094C13.339 5.48189 13.8804 5.48189 14.2414 5.12094C14.6023 4.75999 14.6023 4.21857 14.2414 3.85763L10.6319 0.248151C10.5417 0.157915 10.4514 0.0676776 10.3612 0.0676776C10.1807 -0.0225592 9.91001 -0.0225592 9.6393 0.0676776C9.54906 0.0676776 9.45883 0.157915 9.36859 0.248151L5.75912 3.85763C5.39817 4.21857 5.39817 4.75999 5.75912 5.12094C6.12006 5.48189 6.66148 5.48189 7.02243 5.12094ZM18.1216 10.8059C17.5801 10.8059 17.2192 11.1668 17.2192 11.7082V15.3177C17.2192 15.8591 16.8582 16.2201 16.3168 16.2201H3.68367C3.14225 16.2201 2.7813 15.8591 2.7813 15.3177V11.7082C2.7813 11.1668 2.42035 10.8059 1.87893 10.8059C1.33751 10.8059 0.976562 11.1668 0.976562 11.7082V15.3177C0.976562 16.8517 2.14964 18.0248 3.68367 18.0248H16.3168C17.8509 18.0248 19.0239 16.8517 19.0239 15.3177V11.7082C19.0239 11.1668 18.663 10.8059 18.1216 10.8059Z" fill="#393939" />
</svg>

const likedMember = [
    { id: 1, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww", alt: "Person 1" },
    { id: 2, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww", alt: "Person 2" },
    { id: 3, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww", alt: "Person 3" },
]



export default function ReviewCards() {
    const navigation = useNavigate()
    return (
        <>
            <div className="px-4 md:px-10 lg:px-20">
                <div className="py-10 md:py-[130px]">
                    <h1 className="font-semibold text-center leading-16 text-2xl text-[#393939] md:text-5xl">Join The Discussion</h1>

                    <div className="mt-5 md:mt-[50px]">

                        {/* img N comment section */}
                        <div className="flex gap-2 md:gap-6">
                            {/* img is here */}
                            <img onClick={()=>{navigation('/natalie-root')}} src="/Ellipse 225.png" alt="" className="w-[45px] h-[45px] md:w-[100px] md:h-[100px] rounded-full " />

                            {/* Comment section */}
                            <div className="bg-[#F8F8F8] p-[14px] rounded-[10px] md:p-[30px] w-full md:rounded-[20px]">
                                {/* commented container */}
                                <div className="border-b border-[#999999]">
                                    <h4 className="text-[#373737] text-[18px] md:text-2xl font-semibold mb-6">Larry Hudlemeyer</h4>
                                    <div className="content is here">
                                        <span className="block w-full text-[#5E5E5E] text-[12px] md:text-[14px] font-medium">
                                            " Creating Opportunities for those who serve"
                                        </span>

                                        <span className="mb-4 block w-full text-[#3A3A3A] ext-[12px] md:text-[14px] font-semibold">
                                            Feb 7,2025
                                        </span>

                                        <p className="text-[12px] md:text-[16px] font-normal text-[#393939]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                                            luptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                                    </div>


                                    {/* like and share btn */}
                                    <div className="flex gap-2 md:gap-4 items-center mt-[15px] md:mt-[30px]">
                                        <button className="cursor-pointer shareBtns bg-transparent border-none flex items-center gap-2 text-[#5E5E5E] text-[12px] md:text-[16px] font-bold" >
                                           <span className="h-3 w-3 md:h-5 md:w-5 "> 
                                           <img src="like.svg" className="h-3 w-3  md:h-5 md:w-5"/>
                                           </span> Like
                                        </button>
                                        <button className="cursor-pointer shareBtns bg-transparent border-none flex items-center gap-2 text-[#5E5E5E] text-[10px] md:text-base font-bold" >
                                        <img src="share.svg"  className="h-3 w-3  md:h-5 md:w-5"/>
                                            Share
                                        </button>
                                    </div>

                                    <div className="my-2.5 md:my-4  flex items-center">
                                        <div className="flex items-center justify-center  space-x-[-7px] md:space-x-[-10px]">
                                            {likedMember.map((member) => (
                                                <div key={member.id} className="relative w-5 h-5 md:w-8 md:h-8">
                                                    <img
                                                        src={member.image}
                                                        alt={member.alt}
                                                        className="w-full h-full object-cover rounded-full border-1 md:border-3 border-white shadow-lg"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-[12px]   md:text-[16px] font-medium ml-1.5">3.5K Likes</p>
                                    </div>
                                </div>

                                {/* abb karu ga comment mai!!! */}
                                <div className="flex gap-[18px] items-start mt-6">
                                    <img src="/Ellipse 226.png" alt="..." className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full" />

                                    <div>
                                        <div className="border border-[#989898] rounded-[10px] px-3 py-2 md:rounded-[20px] md:px-6 md:py-5">
                                            <h4 className="text-[18px] md:text-xl font-medium">Erick John</h4>
                                            <p className="text-[12px]   md:text-[16px] mt-1 md:mt-4 font-normal w-full md:text-lg md:w-[70%]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                                        </div>

                                        <div className="mt-[15px] md:mt-[30px]">
                                        <button className="bg-white cursor-pointer px-6 py-3 md:px-12 md:py-3 text-[14px] md:text-[16px] rounded-full border">
      <span className="hidden md:inline">join now to </span>
      comment
    </button>   
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}