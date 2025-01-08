import odooSaaS from "../../assets/saas_img.jpg";
import logo from "../../assets/logo-01.png";
import { Link } from "react-router-dom";

const SaaS = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* Text Content */}
          <div className="lg:col-span-1 lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Odoo SaaS
              </h1>
              <div className="py-12">
                {/* Section: Key Benefits */}
                <div className="mb-12">
                  <p className="mb-4">
                    Are you afraid of complex software implementation and costly
                    IT maintenance? GraceERP Consultancy offers Odoo as a SaaS
                    (Software as a Service) a hassle-free solution for
                    businesses of all sizes.
                  </p>
                  <h2 className="text-2xl font-bold text-indigo-600 mb-6">
                    Key Benefits of Odoo SaaS
                  </h2>
                  <ul className="space-y-4 text-gray-800">
                    <li>
                      <strong>Cloud-Based Access:</strong> Enjoy flexibility and
                      accessibility from anywhere with an internet connection.
                    </li>
                    <li>
                      <strong>No Installation Required:</strong> Eliminate the
                      need for on-premise software and hardware.
                    </li>
                    <li>
                      <strong>Regular Updates:</strong> Automatically receive
                      the latest features and security patches.
                    </li>
                    <li>
                      <strong>Scalability:</strong> Easily adapt to your
                      business growth without significant investments.
                    </li>
                    <li>
                      <strong>Cost-Effective:</strong> Benefit from predictable
                      subscription pricing and reduced IT overhead.
                    </li>
                  </ul>
                </div>

                {/* Section: Suite of Applications */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-6">
                    Our Comprehensive Suite of Applications
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We offer a wide range of modules in each of our subscription
                    plans, tailored to meet your business needs:
                  </p>
                  <ul className="space-y-4 text-gray-800">
                    <li>
                      <strong>Purchase:</strong> Manage supplier relationships
                      and streamline purchasing processes.
                    </li>
                    <li>
                      <strong>Sales:</strong> Track sales activities, orders,
                      and customer interactions.
                    </li>
                    <li>
                      <strong>Inventory:</strong> Keep an accurate inventory
                      count and optimize stock levels.
                    </li>
                    <li>
                      <strong>Accounting:</strong> Automate your financial
                      operations, including invoicing and payments.
                    </li>
                    <li>
                      <strong>CRM:</strong> Boost customer relationships with an
                      integrated CRM system.
                    </li>
                    <li>
                      <strong>HR:</strong> Manage your employees, payroll, and
                      performance efficiently.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center mt-8 w-full lg:col-span-1 lg:row-span-2">
            <div className="relative w-full max-w-3xl h-auto group ">
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105 mb-4"
                src={odooSaaS}
                alt="Odoo SaaS"
              />
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                src={logo}
                alt="Odoo SaaS"
              />
            </div>
          </div>

          {/* Section: Tailored Solutions */}
          <div className="lg:col-span-2 lg:row-start-3 lg:gap-x-8 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">
                Tailored Solutions for Your Industry
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
                {/* Wholesalers */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Wholesalers
                  </h3>
                  <p>
                    Efficient bulk purchasing, supplier management, and
                    inventory optimization.
                  </p>
                </div>
                {/* Retailers */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Retailers
                  </h3>
                  <p>
                    Accurate stock levels, demand forecasting, and personalized
                    customer experiences.
                  </p>
                </div>
                {/* Service Providers */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Service Providers
                  </h3>
                  <p>
                    Streamlined project management, resource allocation, and
                    improved client satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Call to Action */}
            <div className="text-center bg-indigo-600 text-white py-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Ready to experience the power of Odoo SaaS?
              </h2>
              <p className="mb-6">
                Contact us today to schedule a demo and discover how it can
                transform your business.
              </p>
              <Link
                to="/contact-us"
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaaS;
