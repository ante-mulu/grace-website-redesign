const CompanyOverview = () => {
  return (
    <div className="bg-white">
      {/* Company Overview Header */}
      <div className="bg-orange-500 py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-4xl font-bold">COMPANY OVERVIEW</h1>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8 py-10 px-6">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:w-1/2 hover:scale-105 transition-transform duration-500 ">
          <h2 className="text-xl font-bold">MISSION:</h2>
          <p className="mt-2 text-gray-700">
            To deliver comprehensive, scalable, and innovative ERP solutions
            that enable businesses to streamline their operations, enhance
            efficiency, and make data-driven decisions.
          </p>
        </div>
        <div
          className="bg-white shadow-lg rounded-lg p-6 sm:w-1/2
        hover:scale-105 transition-transform duration-500
        "
        >
          <h2 className="text-xl font-bold">VISION:</h2>
          <p className="mt-2 text-gray-700">
            To revolutionize business operations by providing cutting-edge ERP
            solutions that empower organizations to optimize their processes,
            drive growth, and achieve unparalleled success in the digital era.
          </p>
        </div>
        <div
          className="bg-white shadow-lg rounded-lg p-6 sm:w-1/2
        hover:scale-105 transition-transform duration-500
        "
        >
          <h2 className="text-xl font-bold">OUR VALUES:</h2>
          <ul className="mt-2 text-gray-700">
            <li>Seasoned experts</li>
            <li> Effective support and follow up</li>
            <li> Free trial period</li>
          </ul>
        </div>
      </div>

      {/* Service Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-lg p-6 shadow-lg
                hover:scale-105 transition-transform duration-500
                "
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">
                    {service.number}
                  </div>
                  <h3 className="ml-4 text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample service data to display in the Service section
const services = [
  {
    number: "01",
    title: "ERP Implementation",
    description:
      "Implementation of the ERP system, including project planning, system configuration, data migration, and user training.",
  },
  {
    number: "02",
    title: "Customization and Configuration",
    description:
      "Offer customization services to tailor the ERP software to the specific needs and processes of the client’s business.",
  },
  {
    number: "03",
    title: "System Integration",
    description:
      "Integrating the ERP system with existing or new applications to ensure seamless data flow across the organization.",
  },
  {
    number: "04",
    title: "Consulting and Advisory Services",
    description:
      "Provide consulting services to guide businesses in selecting the right ERP solution and assessing their processes.",
  },
  {
    number: "05",
    title: "Training and Support",
    description:
      "Offer ongoing technical support and maintenance services to address any issues and provide software updates.",
  },
  {
    number: "06",
    title: "System Upgrades and Enhancements",
    description:
      "Help businesses stay up to date by offering system upgrades, improving performance, and ensuring compatibility with the latest technologies.",
  },
];

export default CompanyOverview;
