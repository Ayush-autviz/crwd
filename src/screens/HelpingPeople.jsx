import Footer from "../components/Footer";
import Header from "../components/Header";

const HelpingPeople = () => {
  return (
    <>
      <Header />
      <div className=" py-16 px-4 md:px-8 lg:px-16">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-medium text-center text-[#393939] mb-12">
          Helping people help each other
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default HelpingPeople;
