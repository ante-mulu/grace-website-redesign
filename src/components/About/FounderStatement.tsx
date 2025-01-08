import ceoImage from "../../assets/ermi.avif"; // Make sure the correct path is used
import "./Founder.css";

const FounderStatement = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <img src={ceoImage} alt="Mr. Ermiyas Tegegn" className="ceo-image" />
        </div>

        {/* Text section */}
        <div className="w-full lg:w-1/2 lg:pl-12 text-justify">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet The Founder
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 ">
            I’m Ermias Tegegn Retta, the founder of GraceERP Consultancy PLC.
            With extensive experience in ERP system implementation, particularly
            with Odoo ERP, I have dedicated my career to driving innovation and
            excellence in this field. My journey began with a strong educational
            background in bachelor degree in Computer Science from Dire Dawa
            University, complemented by hands-on experience that has equipped me
            to lead our dynamic team in delivering top-notch solutions.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            At GraceERP Consultancy PLC, we are committed to leading the Odoo
            ERP market in Ethiopia by building an innovative team with seasoned
            knowledge. Our mission is to empower businesses through tailored ERP
            solutions that enhance efficiency and drive success. We believe that
            collaboration and integrity are the keys to achieving sustainable
            growth for our clients and the communities we serve.
          </p>
          <p className="text-blue-600 font-semibold text-lg mt-6 text-right">
            Ermias Tegegn Retta <br /> CEO and Founder <br />
            GraceERP Consultancy PLC
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderStatement;
