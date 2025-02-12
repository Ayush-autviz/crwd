import NonProfitCardSearch from "./NonProfitCardSearch";
import user from "../assets/images/user.png";
import ladyWithbox from "../assets/images/ladywithbox.png";
import userinfo from "../assets/images/userinfo.png";
import notFound from "../assets/images/notfound.png";
import { UserRound } from "lucide-react";

const crwds = [
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: ladyWithbox,
    location: "New York",
    members: 45,
    icon: user,
  },
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: ladyWithbox,
    location: "Paris",
    members: 45,
    icon: user,
  },
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: ladyWithbox,
    location: "Paris",
    members: 45,
    icon: user,
  },
  {
    title: "Nonprofits Heading",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    image: ladyWithbox,
    location: "Paris",
    members: 45,
    icon: user,
  },
];

function NonProfitCrwd({ isCrwd, isTyping = true }) {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="font-semibold text-3xl sm:text-4xl pb-3">
          {isCrwd ? "CRWDS" : "Nonprofits"}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#393939] max-w-[700px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {isCrwd
          ? [1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="bg-[#F3F2F2] rounded-xl flex flex-col sm:flex-row gap-4 p-4"
              >
                <div className="rounded-xl flex items-center justify-center w-full sm:w-2/5 p-4 bg-[#bbbbbb]">
                  <img
                    src={userinfo || "/placeholder.svg"}
                    alt=""
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="flex flex-col w-full sm:w-3/5 justify-center gap-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#373737] line-clamp-2">
                      CRWDs Group heading here
                    </h3>
                    <p className="text-[#6B6B6B] font-normal text-sm sm:text-base line-clamp-2">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <UserRound size={15} color="#000" strokeWidth={3} />
                    <span className="text-base sm:text-lg font-semibold">
                      {item} Members
                    </span>
                  </div>
                </div>
              </div>
            ))
          : crwds.map((item, index) => (
              <NonProfitCardSearch key={index} item={item} />
            ))}
      </div>

      <button className="rounded-full py-2 px-4 w-full sm:w-[200px] cursor-pointer text-black border mx-auto block mb-12">
        See More
      </button>
    </div>
  );
}

export default NonProfitCrwd;
