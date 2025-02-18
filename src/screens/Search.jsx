import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NonProfitSearch from "../components/NonprofitSearch";

const crwds = [
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: "np1.svg",
    location: "New York",
    members: 45,
    crwdHeading: "CRWDs Group heading here ",
    crwdDesc:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  },
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: "np2.svg",
    location: "Paris",
    members: 45,
    crwdHeading: "CRWDs Group heading here ",
    crwdDesc:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  },
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: "np3.svg",
    location: "Nigeria",
    members: 40,
    crwdHeading: "CRWDs Group heading here ",
    crwdDesc:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  },
];

const SearchScreen = () => {
  const [type, setType] = useState("crwd");
  const [placeholder, setPlaceholder] = useState("Search");
  const [text, setText] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Tailwind's `sm` breakpoint is 640px
        setPlaceholder("Search");
      } else {
        setPlaceholder("Search for CRWDs and Nonprofits");
      }
    };

    // Set initial placeholder
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Header />
      <div className="flex p-5 md:p-15   xl:p-25  mt-[70px]  flex-col gap-5 justify-center    items-center">
        <div className="text-2xl   text-center md:text-5xl   font-bold text-[#393939] mb-5">
          Find CRWD and Nonprofits
        </div>
        <div className="flex flex-row gap-3 md:p-1  p-1 w-full    md:w-[90%] lg:w-[60%] xl:w-[45%]  rounded-full border border=[#393939]">
          <div className="bg-[#393939] p-3 rounded-full   ">
            <Search color="#fff" className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <input
            onChange={(e) => setText(e.target.value)}
            className="w-full text-lg md:text-2xl outline-none"
            placeholder={placeholder}
            // The zero-width space ensures the first part is always visible
          />
        </div>

        <div className="flex flex-row justify-center mt-10 md:mt-20 items-center gap-4">
          <button
            onClick={() => setType("crwd")}
            className={`
        px-8 flex-1 py-3 
        text-[14px]
        text-nowrap
        md:text-xl
        w-[130px]
        md:w-[210px]
        rounded-full border 
        
        transition-shadow 
        cursor-pointer 
        font-semibold
        ${
          type === "crwd"
            ? "bg-[#393939] text-white border-gray-300"
            : "bg-white text-gray-700 border-gray-300"
        }
      `}
          >
            CRWD
          </button>
          <button
            onClick={() => setType("nonprofits")}
            className={`
        px-8 flex-1 py-3 
        text-[14px]
        md:text-xl
        rounded-full border 
        w-[130px]
        md:w-[210px]
        transition-shadow 
        cursor-pointer 
        font-semibold
        ${
          type === "nonprofits"
            ? "bg-[#393939] text-white border-gray-300"
            : "bg-white text-gray-700 border-gray-300"
        }
      `}
          >
            Nonprofits
          </button>
        </div>

        {text.length > 5 ? (
          <></>
        ) : (
          <div className="flex flex-col w-full   gap-3 mt-10 md:mt-15">
            <div className="text-2xl   md:text-5xl  font-bold text-[#393939] ">
              {type === "crwd" ? "CRWDs" : "Nonprofits"}
            </div>
            <div className="text-sm   md:text-lg  font-light text-[#393939] w-[85%] md:w-[60%] ">
              {" "}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </div>
          </div>
        )}

        {text?.length > 5 ? (
          <div className="flex flex-col items-center justify-center mt-5 md:mt-10 text-center p-4">
            <h4 className="text-xl md:2xl font-semibold mb-2">
              Hmm, no results for that search.
            </h4>
            <p className="mb-4 text-xl md:text-2xl font-normal text-[#616161]">
              Please try again.
            </p>
            <img
              src={"/placeholder.png"}
              alt="Not Found"
              className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-contain"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {crwds.map((item, index) => {
              return (
                <NonProfitSearch
                  key={index}
                  isTyping={text?.length > 5}
                  type={type}
                  item={item}
                />
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchScreen;
