import { Link } from "react-router-dom";
import royal from "/assets/royal.png";
import tamra from "/assets/TAMRA.png";
import teleport from "/assets/telePort.png";
import atrafiSolution from "/assets/AtrafiSolution.jpg"
import credoks from "/assets/Credoks.jpeg"
import kare from "/assets/kare.png"

const Customers = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-8">
      {/* Top Enterprises Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted by</h2>
        <p className="text-2xl font-semibold">Top Enterprises</p>
        <p className="text-gray-600 mt-2 mb-6">
          Implementation Experience and Success
        </p>
        <Link
          className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 transition duration-300"
          to="/happy-clients"
        >
          Hear their story
        </Link>
      </div>

      {/* Logo Grid */}
      <div className="w-full bg-gray-50 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={royal}
              alt="Royal Family's company logo"
            />
          </div>
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={teleport}
              alt="Teleport's company logo"
            />
          </div>
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={tamra}
              alt="Tamra's company logo"
            />
          </div>
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={atrafiSolution}
              alt="atrafiSolution's company logo"
            />
          </div>
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={credoks}
              alt="credoks's company logo"
            />
          </div>
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={kare}
              alt="kare's company logo"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Customers;
