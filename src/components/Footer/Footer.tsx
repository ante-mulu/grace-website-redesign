import logo from "../../assets/logo-removebg-preview.png";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 py-12">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="p-4 bg-gray-200 rounded-full shadow-lg mb-4">
              <img className="w-12 h-12" src={logo} alt="Company logo" />
            </div>
            <p className=" text-orange-600 text-xl  font-bold text-center lg:text-left mb-4">
              Empowering Your Business Potential
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/grace_erp"
                target="_blank"
                className="hover:bg-gray-100 p-2 rounded-lg"
              >
                <FaTelegram className="text-gray-500 hover:text-gray-900 text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/graceerp-consultancy/"
                target="_blank"
                className="hover:bg-gray-100 p-2 rounded-lg"
              >
                <BiLogoLinkedinSquare className="text-gray-500 hover:text-gray-900 text-2xl" />
              </a>
              <a
                href="mailto:contact@grace-erp-consultancy.com"
                className="hover:bg-gray-100 p-2 rounded-lg"
              >
                <MdEmail className="text-gray-500 hover:text-gray-900 text-2xl" />
              </a>
              <a
                href="http://www.youtube.com/@GraceERPConsultancy"
                target="_blank"
                className="hover:bg-gray-100 p-2 rounded-lg"
              >
                <FaYoutube className="text-gray-500 hover:text-gray-900 text-2xl" />
              </a>
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/erp-implementation"
                  className="hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block"
                >
                  ERP Implementation
                </Link>
              </li>
              <li>
                <Link
                  to="/SaaS-service"
                  className="hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block"
                >
                  SaaS Service
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block"
                >
                  Functional Training
                </Link>
              </li>
            </ul>
          </div>

          {/* GraceERP Consultancy Section */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-4">
              GraceERP Consultancy PLC
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/happy-clients"
                  className="hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block"
                >
                  Happy Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <p>
                  Address: G&B Building, 2nd Floor, Office 203,
                  <br />
                  200m from Century Mall to Gurd Shola,
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </li>
              <li>Phone: +251-991133434 / +251-925210595</li>
              <li>Email: contact@grace-erp-consultancy.com</li>
            </ul>
          </div>

          {/* Demo Section */}

          <div className=" bg-indigo-600  text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <a
              href="https://demo1.grace-erp-consultancy.com"
              target="_blank"
              className=" flex justify-center items-center hover:text-gray-900 transition-colors duration-300 py-2 text-2xl lg:text-3xl"
            >
              <p>Demo Site</p>
              <span className="ml-2 text-3xl" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <div className="mt-4 text-center">
              <p className="text-lg font-bold">Demo Login Details:</p>
              <p className="mt-2">
                <span className="font-bold">Email:</span> demo
              </p>
              <p>
                <span className="font-bold">Password:</span> demo
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center">
          <p>
            © {year}{" "}
            <Link className="text-blue-600 hover:text-blue-800" to="/">
              GraceERP Consultancy PLC
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
