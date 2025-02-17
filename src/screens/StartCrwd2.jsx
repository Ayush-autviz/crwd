import { Bold, ChevronDown, Info, Italic, Link, Underline, Upload, X } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const nonprofits = [
  {
    id: "1",
    name: "American Cancer Society",
    icon: "crwd1.svg",
  },
]

const StartCRWD2 = () => {
  const [selectedNonprofits, setSelectedNonprofits] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [editorContent, setEditorContent] = useState("")
  const [other, setOther] = useState(false);
  const navigation = useNavigate();
  const [search,setSearch] = useState('');


  const [showTooltip, setShowTooltip] = useState(false);

  const handleTouch = (e) => {
    e.preventDefault();
    setShowTooltip(!showTooltip);
  };


  const toggleNonprofit = (nonprofit) => {
    const exists = selectedNonprofits.find((n) => n.id === nonprofit.id)
    if (exists) {
      setSelectedNonprofits(selectedNonprofits.filter((n) => n.id !== nonprofit.id))
    } else {
      setSelectedNonprofits([...selectedNonprofits, nonprofit])
    }
    setSearch("");
    setIsDropdownOpen(false);
    
  }

  const removeNonprofit = (id) => {
    setSelectedNonprofits(selectedNonprofits.filter((n) => n.id !== id))
  }

  return (
    <div className='min-h-screen  flex justify-center items-center my-4 bg-cover bg-no-repeat'>

      <div className='bg-white shadow-[0px_0px_24px_1px_rgba(0,_0,_0,_0.1)] rounded-2xl px-4 py-6 md:px-10 md:py-6  flex flex-col justify-center items-center w-[90%] md:w-[55%] xl:w-[32%]'>
        <img src='crwd.png' className='h-6 sm:h-7 md:h-8' />
        <div className="mt-5 flex w-full  justify-center gap-2 items-center text-[#000]">
          <hr className="border-[#989898] w-full" />
        </div>
        <div className='text-[12px] w-full text-left   sm:text-sm md:text-xl font-semibold mt-4 text-[#373737] '>Who are you donating to?</div>
        <div className='flex flex-col w-full mt-4'>
          <div className=" text-[#393939] text-[10px] md:text-[14px] font-semibold">Choose Nonprofit(s)</div>
          
          <div className='text-[8px] md:text-[12px] mt-1 text-[#393939]'>A CRWD can support one or more nonprofits</div>
          <div className="relative w-full">
            <input
            value={search}
            onChange={(e)=>{
              if(e.target.value.length>0){
                setIsDropdownOpen(true);
              }else{
                setIsDropdownOpen(false);
              }
              
              setSearch(e.target.value)
            }}
            className='w-full px-4 mt-2 py-3 md:py-3 text-[10px] outline-none   md:text-[14px]  border border-[#989898] rounded-full flex items-center justify-between bg-white'
            placeholder='Search for a Non-Profit'
            />
            {isDropdownOpen && (
              <div className="absolute w-full -bottom-[120%]  p-2 bg-white border border-[#E8E8E8] rounded-xl shadow-lg z-10">
                {nonprofits.map((nonprofit) => (
                  <button
                    key={nonprofit.id}
                    onClick={() => toggleNonprofit(nonprofit)}
                    className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50"
                  >
                    <img src={nonprofit.icon || "/placeholder.svg"} alt="" className="w-5 h-5" />
                    <span className='text-[#393939] text-[10px] md:text-[14px] font-semibold'>{nonprofit.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className='flex flex-row gap-2 flex-wrap mt-2'>
            {
              selectedNonprofits.map((item)=>{
                return <>
                 <div className="flex w-fit items-center gap-2 rounded-full border py-2 px-3 border-[#E8E8E8]">
                    <img src={selectedNonprofits[0].icon || "/placeholder.svg"} alt="" className="w-6 h-6" />
                    <span className='text-[#393939] text-[10px] md:text-[14px] font-semibold'>{selectedNonprofits[0].name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removeNonprofit(selectedNonprofits[0].id)
                      }}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </>
              }

              )
            }
            </div>

          <div className='text-[#393939] mt-4 text-[10px] md:text-[14px] font-semibold'>What is your suggested monthly donation for your CRWD?</div>
          <div className='text-[8px] md:text-[12px] mt-1 text-[#393939]'>Minimum donation is $5 for all CRWD’s, but you can suggest an amount here.</div>
          <div className='flex flex-row  items-center gap-2 mt-4'>
            <div onClick={() => setOther(false)} className={`rounded-xl px-5 py-3 md:py-3 text-[10px]  cursor-pointer  md:text-[14px]  flex items-center justify-center bg-[#EEE] ${!other ? 'border border-[#989898]' : ''}`}>
              $5
            </div>
   <div className="relative inline-block">
      <div 
        onClick={() => setOther(true)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onTouchStart={handleTouch}
        className="group rounded-xl px-5 py-3 md:py-3 text-[10px] md:text-[14px] flex items-center gap-2 justify-center bg-[#EEE] cursor-pointer hover:bg-[#E5E5E5] transition-colors"
        style={other ? { border: '1px solid #989898' } : {}}
      >
        <span>Suggested</span>
        {/* <Info className="h-3 w-3 md:h-4 md:w-4 text-gray-500" /> */}
      </div>
      
      {showTooltip && (
        <div className="absolute z-50 w-48 p-2 text-sm text-white bg-[#393939] rounded-lg -translate-x-1/2 left-1/2 mt-2">
          <div className="absolute w-2 h-2 bg-[#393939] rotate-45 -translate-x-1/2 -top-1 left-1/2" />
          <p className="text-center bg-[#393939] text-xs">
            People can join any CRWD for $5. Suggested amount is optional but what we recommend users to donate monthly
          </p>
        </div>
      )}
    </div>
            {
              other && (<input
                className="w-full px-4  py-3 md:py-3 text-[10px]   md:text-[14px] rounded-full border border-[#989898]  focus:outline-none "
                type="number"
                name="cardNumber"
                placeholder="$"
              />)
            }
          </div>
          <button
          onClick={()=>{navigation("/crwd")}}
            className="bg-[#393939] mt-5 text-[10px] md:text-[14px]  rounded-full cursor-pointer text-white py-3 md:py-3 w-full  hover:shadow-xl  "
          >
              Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartCRWD2;



