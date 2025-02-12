import React, { useState } from "react";
import Header from "../components/Header";
import SearchImg from "../assets/images/search.png";
import userinfo from "../assets/images/userinfo.png";
import user from "../assets/images/user.png";
import ladyWithbox from "../assets/images/ladywithbox.png";

import Footer from "../components/Footer";
import NonProfitCard from "../components/NonProfitCard";
import NonProfitCardSearch from "../components/NonProfitCardSearch";
import NonProfitCrwd from "../components/NonProfitCrwd";
import searchImag from "../assets/images/cil_search.svg";

function Search() {
  const [isCrwd, setIsCrwd] = useState(true);
  const [text, setText] = useState("");

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12  ">
        <div className="p-10 w-[100%] text-center ">
          <p className="font-bold pt-10 text-5xl pb-4 text-[#3939393]">
            Find CRWD and Nonprofits
          </p>
          {/* <SearchBar /> */}
          <div className="relative mx-auto pt-4 ">
            {/* <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              name="search"
              className=" search-icon  relative border rounded-full h-[50px] max-w-[773px]   placeholder:p-12 inline-block w-[100%]"
              placeholder="Search for CRWDs and Non Profits"
            ></input> */}

            <form class="w-[600px] mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative ">
                <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <div className="h-[45px] w-[45px] bg-[#393939]  flex justify-center items-center rounded-full">
                    <img src={searchImag} />
                  </div>
                </div>
                <input
                  onChange={(e) => setText(e.target.value)}
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-[65px] text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50  focus:border-blue-500  dark:placeholder-gray-400  dark:focus:border-blue-500"
                  placeholder="Search for CRWDs and Non Profits"
                  required
                />
                {/* <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button> */}
              </div>
            </form>
          </div>

          <div className="pt-[130px] flex gap-3 justify-center ">
            <button
              onClick={() => setIsCrwd(true)}
              className={`rounded-full p-4 w-[200px] cursor-pointer border font-semibold text-xl  ${
                isCrwd ? "text-white bg-[#393939]" : ""
              }`}
            >
              CRWD
            </button>
            <button
              onClick={() => setIsCrwd(false)}
              className={`rounded-full p-4 w-[200px] cursor-pointer font-semibold text-xl  border ${
                !isCrwd ? "bg-[#393939] text-white" : "text-black"
              } `}
            >
              Nonprofits
            </button>
          </div>
        </div>
        <NonProfitCrwd isCrwd={isCrwd} isTyping={text?.length > 5} />
      </div>
      {/* </div> */}

      <Footer />
    </div>
  );
}

export default Search;
