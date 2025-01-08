import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheckCircle } from "react-icons/fa";
import "../About/Testimonials.css";

// Modality data
const modalities = [
  {
    name: "Basic",
    role: "Modules Included",
    modules: ["Purchase", "Inventory", "Sales", "Expenses", "Invoicing"],
  },
  {
    name: "Standard",
    role: "Modules Included",
    modules: [
      "Purchase",
      "Inventory",
      "Sales",
      "Expenses",
      "CRM",
      "Accounting",
      "HR",
      "Payroll",
      "Fixed Asset",
      "Budget Management",
      "Payroll",
    ],
  },
  {
    name: "Custom",
    role: "Request Quotation",
    modules: [
      "All Modules",
      "Multi-company",
      "Full Customization",
      "End-to-End modules integration",
      "6 months to 1-year support",
    ],
  },
];

const SubscriptionAndPlan = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="px-4 py-12 md:px-24 lg:px-32 text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 mb-6">
          Subscription And Plan
        </h1>
      </div>
      {/* Pricing section */}
      <div className="flex w-full h-40 bg-orange-500 text-white justify-center items-center">
        <h1 className="text-4xl">Subscription</h1>
      </div>
      <section id="pricing" className="bg-blue-900 py-16">
        <div className="text-center mb-12">
          <h1 className="text-yellow-400 text-4xl sm:text-5xl font-bold mb-4">
            ODOO ERP SaaS Subscription Plan
          </h1>
          <p className="text-white text-xl">Choose Your Subscription Plan</p>
          <p className="text-white mt-2">
            10 days free trial. No agreement or pre-payment required.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mx-2">
              Retailer
            </button>
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mx-2">
              Wholesaler
            </button>
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mx-2">
              Service
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-32">
          {/* Basic Plan */}
          <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <h2 className="text-yellow-400 text-xl font-bold mb-4">BASIC</h2>
            <h3 className="text-3xl font-bold mb-4">4,199 ETB/MONTH</h3>
            <ul className="space-y-3 mb-8">
              <li>✔️ 10 days free trial</li>
              <li>✔️ 5 modules</li>
              <li>✔️ Unlimited users</li>
              <li>✔️ Customized reports</li>
              <li>✔️ On-site training</li>
              <li>✔️ 24/7 Support</li>
            </ul>
            <a
              href="http://159.69.219.61:8080/survey/start/3091f26a-3364-4776-a38b-1d73347c9b49"
              target="_blank"
              className="cursor-pointer bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full mt-6 shadow-lg hover:scale-105 transition-transform duration-500"
            >
              Get Started
            </a>
          </div>

          {/* Standard Plan */}
          <div className="bg-purple-700 text-white p-8 rounded-lg relative shadow-lg hover:scale-105 transition-transform duration-500">
            <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-br-lg">
              Most Popular
            </div>
            <h2 className="text-yellow-400 text-xl font-bold mb-4">STANDARD</h2>
            <h3 className="text-3xl font-bold mb-4">10,999 ETB/MONTH</h3>
            <ul className="space-y-3 mb-8">
              <li>✔️ 10 days free trial</li>
              <li>✔️ 11 modules</li>
              <li>✔️ Unlimited users</li>
              <li>✔️ Customized reports</li>
              <li>✔️ On-site training</li>
              <li>✔️ 24/7 Support</li>
            </ul>
            <a
              href="http://159.69.219.61:8080/survey/start/3091f26a-3364-4776-a38b-1d73347c9b49"
              target="_blank"
              className="cursor-pointer bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full mt-6 shadow-lg hover:scale-105 transition-transform duration-500"
            >
              Get Started
            </a>
          </div>

          {/* Custom Plan */}
          <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <h2 className="text-yellow-400 text-xl font-bold mb-4">CUSTOM</h2>
            <h3 className="text-3xl font-bold mb-4">Request a Quotation</h3>
            <ul className="space-y-3 mb-8">
              <li>✔️ 10 days free trial</li>
              <li>✔️ All modules</li>
              <li>✔️ Full ERP Implementation</li>
              <li>✔️ End-to-End Integration</li>
              <li>✔️ Unlimited users</li>
              <li>✔️ Full customization</li>
              <li>✔️ Customized reports</li>
              <li>✔️ On-site training</li>
              <li>✔️ 24/7 Support</li>
            </ul>
            <a
              href="http://159.69.219.61:8080/survey/start/3091f26a-3364-4776-a38b-1d73347c9b49"
              target="_blank"
              className="cursor-pointer bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full mt-6 shadow-lg hover:scale-105 transition-transform duration-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* Modalities section */}
      <div className="flex w-full h-40 bg-orange-500 text-white mb-4 justify-center items-center">
        <h1 className="text-4xl">Modules Available</h1>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Slider {...settings}>
            {modalities.map((modality, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-100 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {modality.name} Plan
                </h2>
                <p className="text-lg font-semibold mb-4">{modality.role}</p>
                {modality.modules.length > 1 ? (
                  // Check if the plan is Standard to apply two-column grid layout
                  <ul
                    className={`list-disc list-inside text-left mx-auto w-3/4 ${
                      modality.name === "Standard"
                        ? "grid grid-cols-1 md:grid-cols-2 gap-x-4"
                        : ""
                    }`}
                  >
                    {modality.modules.map((module, idx) => (
                      <li
                        key={idx}
                        className="flex items-center mb-2 text-gray-700"
                      >
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {module}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg text-gray-700">{modality.modules[0]}</p>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SubscriptionAndPlan;
