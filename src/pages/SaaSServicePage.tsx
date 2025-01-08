import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import SaaS from "../components/SaaSService/SaaS";
import SaaSIndustries from "../components/SaaSService/SaaSIndustries";
import SubscriptionAndPlan from "../components/SaaSService/SubscriptionAndPlan";

const SaaSServicePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/assets/img_b.png')]  bg-no-repeat bg-cover flex w-fill h-80  text-[#0f172a] mb-4 justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {" "}
          SaaS Service
        </h1>
      </div>
      <SaaS />
      <SaaSIndustries />
      <SubscriptionAndPlan />
      <Footer />
    </>
  );
};

export default SaaSServicePage;
