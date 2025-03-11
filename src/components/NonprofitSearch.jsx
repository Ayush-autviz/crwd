import { MapPin, UserRound } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const crwds = [
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: "np1.svg",
    location: "New York",
    members: 45,
  },
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: "np2.svg",
    location: "Paris",
    members: 45,
  },
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: "np3.svg",
    location: "Nigeria",
    members: 40,
  },
];

const NonProfitSearch = ({ item, isTyping, type }) => {
  const navigation = useNavigate();

  const navigateNonprofit = () => {
    navigation("/nonprofit");
  };

  if (isTyping)
    return (
      <div className="flex flex-col items-center justify-center text-center p-4">
        <h4 className="text-xl font-semibold mb-2">
          Hmm, no results for that search.
        </h4>
        <p className="mb-4">Please try again</p>
        <img
          src={notFound || "/placeholder.svg"}
          alt="Not Found"
          className="max-w-full h-auto"
        />
      </div>
    );

  return (
    <>
      {type === "nonprofits" ? (
    <div  onClick={()=>{navigation("/nonprofit", { state: { image: item.image,name:item.title } })}} className="rounded-xl p-4 flex flex-col xl:flex-row gap-5 cursor-pointer bg-[#f3f2f2]">
    <img
      src={item.image}
      alt={item.title}
      className="rounded-xl w-full xl:w-[230px] xl:min-w-[230px] h-[230px] object-cover"
    />
    <div className="flex flex-col gap-4 items-start">
      <div className="space-y-2 w-full">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 line-clamp-1">
          {item.title}
        </h3>
        <p className="text-[12px] md:text-[14px] text-gray-600 line-clamp-3">
          {item.desc}
        </p>
      </div>
      <div className="flex flex-row items-center gap-4 flex-wrap">
        <div className="flex flex-row items-center gap-2">
          <MapPin className="h-3 w-3 md:h-6 md:w-6" />
          <div className="text-[12px] md:text-[16px] font-bold">
            {item.location}
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img src="people.svg" alt="Members" className="h-3 w-3 md:h-6 md:w-6" />
          <div className="text-[12px] md:text-[16px] font-bold">
            {item.members} Members
          </div>
        </div>
      </div>
      <button
        onClick={()=>{navigation("/nonprofit", { state: { image: nonprofit.logo,name:nonprofit.name } })}}
        className="text-[12px]  md:text-[14px] px-4 py-2 md:px-8 md:py-2 bg-[#393939] hover:shadow-xl transition-shadow cursor-pointer rounded-full border border-gray-300 text-white font-medium"
      >
        Donate Now
      </button>
    </div>
  </div>
      ) : (
        <>
    <div onClick={()=>{navigation("/crwd", { state: { image: item.crwdimage } })}} className="rounded-xl p-4 flex flex-col xl:flex-row gap-5 bg-[#f3f2f2]">
      <div className="flex cursor-pointer justify-center items-center rounded-xl w-full xl:w-[230px] xl:min-w-[230px] h-[230px] bg-white">
        <img 
          src={item.crwdimage}
          className="w-[130px] h-[130px] object-contain"
          alt="Crowd"
        />
      </div>
      <div className="flex flex-col gap-4 items-start">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 line-clamp-1">
            {item.crwdHeading}
          </h3>
          <p className="text-[12px] md:text-[14px] text-gray-600 line-clamp-3">
            {item.crwdDesc}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img src="people.svg" className="h-3 w-3 md:h-6 md:w-6" alt="People" />
          <div className="text-[12px] md:text-[16px] font-bold">
            {item.members} Members
          </div>
        </div>
        <button
          onClick={()=>{navigation("/crwd", { state: { image: item.crwdimage } })}}
          className="text-[12px]  md:text-[14px] px-4 py-2 md:px-8 md:py-2 bg-[#393939] hover:shadow-xl transition-shadow cursor-pointer rounded-full border border-gray-300 text-white font-medium"
        >
          Donate Now
        </button>
      </div>
    </div>
        </>
      )}
    </>
  );
};

export default NonProfitSearch;
