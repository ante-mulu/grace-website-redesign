import saasIndustryImg from "../../assets/saas_industries.jpg";
import saasmodule from "../../assets/SaaS_modules.jpg";
import sub from "../../assets/Subscription_Plan.jpg";

const SaaSIndustries = () => {
  return (
    <>
      <div className="px-4 py-12 md:px-24 lg:px-32">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="w-full max-w-md h-64 md:h-72 lg:h-80 transition-transform duration-500 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={saasIndustryImg}
              alt="SaaS Industry Image"
            />
          </div>
          <div className="w-full max-w-md h-64 md:h-72 lg:h-80 transition-transform duration-500 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={saasmodule}
              alt="SaaS Module Image"
            />
          </div>
          <div className="w-full max-w-md h-64 md:h-72 lg:h-80 transition-transform duration-500 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={sub}
              alt="SaaS Subscription Plan Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SaaSIndustries;
