import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Training = () => {
  const firstBatchPhotos: string[] = [
    "/assets/first_batch/1.jpg",
    "/assets/first_batch/3.jpg",
    "/assets/first_batch/4.jpg",
    "/assets/first_batch/5.jpg",
    "/assets/first_batch/6.jpg",
    "/assets/first_batch/7.jpg",
    "/assets/first_batch/8.jpg",
    "/assets/first_batch/9.jpg",
    "/assets/first_batch/10.jpg",
    "/assets/first_batch/11.jpg",
    "/assets/first_batch/12.jpg",
  ];

  const secondBatchPhotos: string[] = [
    "/assets/second_batch/2_1.jpg",
    "/assets/second_batch/2_2.jpg",
    "/assets/second_batch/2_3.jpg",
    "/assets/second_batch/2_4.jpg",
    "/assets/second_batch/2_5.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
{/* Title Section */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-gray-600 text-5xl font-extrabold text-center">
          Unlock Your Potential with GraceERP's Odoo Training Programs
        </h1>
      </div>

{/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Elevate Your Skills with GraceERP Consultancy
        </h2>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          At GraceERP Consultancy PLC, we offer comprehensive Odoo training programs designed to empower individuals and organizations. Our courses provide hands-on experience with Odoo, the world's leading ERP system, ensuring you gain the skills needed to effectively manage and optimize business processes.
        </p>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          As a trailblazer in Odoo implementation and training in Ethiopia, we are dedicated to cultivating a dynamic Odoo community. Our training is tailored to meet the diverse needs of the market, equipping professionals with the knowledge and confidence to excel in their careers.
        </p>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          Whether you're looking to enhance your existing Odoo skills or embark on a new career path, our upcoming training sessions are your gateway to unlocking the full potential of Odoo. Join us and transform your professional journey!
        </p>
      </section>

      {/* 1st Batch Training Highlights Section */}
      <section className="max-w-7xl mx-auto py-8 px-6">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          1st Batch Training Highlights
        </h3>
        <Slider {...settings}>
          {firstBatchPhotos.map((photo, index) => (
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
          {secondBatchPhotos.map((photo, index) => (
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
      {/* Uncomment if you want to include the Call to Action section */}
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