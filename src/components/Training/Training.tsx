import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Training = () => {
  const photos = [
    "/assets/1.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
    "/assets/7.jpg",
    "/assets/8.jpg",
    "/assets/9.jpg",
    "/assets/10.jpg",
    "/assets/11.jpg",
    "/assets/12.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="bg-gray-50">
      {/* Title Section */}
      <div className="flex items-center justify-center py-10">
        <h1 className="text-gray-600 text-5xl font-bold text-center">
          GraceERP Consultancy PLC recently concluded its 1st Batch Odoo Functional Training Program
        </h1>
      </div>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          GraceERP Consultancy’s Odoo Training Program
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          GraceERP Consultancy PLC recently concluded its inaugural Odoo Functional Training Program, a two-month intensive course designed to equip participants with the skills needed to navigate and optimize Odoo, the world's leading ERP system.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          As a pioneer in Odoo implementation and training in Ethiopia, GraceERP is committed to fostering a vibrant Odoo community and driving business growth through technology.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Whether you're looking to enhance your Odoo skills or start a new career path, join our upcoming training sessions and discover the power of Odoo to unlock your business's full potential.
        </p>
      </section>

      {/* 1st Batch Training Highlights Section */}
      <section className="max-w-7xl mx-auto py-8 px-6">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          1st Batch Training Highlights
        </h3>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="px-2">
              <img
                src={photo}
                alt={`Training Highlight ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-60 object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => setSelectedImage(photo)}
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* 2nd Batch Training Highlights Section */}
      <section className="max-w-7xl mx-auto py-8 px-6">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          2nd Batch Training Highlights
        </h3>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="px-2">
              <img
                src={photo}
                alt={`Second Training Highlight ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-60 object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => setSelectedImage(photo)}
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      {/* <section className="bg-orange-600 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-white text-4xl font-semibold mb-4">
            Join our 2nd Batch Training Program
          </h3>
          <p className="text-white text-lg mb-8">
            Take the next step in your career and become an Odoo expert with our upcoming training sessions. Learn from industry leaders and unlock your potential.
          </p>
          <Link
            to="https://shorturl.at/dPGf4"
            target="_blank"
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-50 transition-colors"
          >
            Register
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Training;