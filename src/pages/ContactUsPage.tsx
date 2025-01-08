import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/assets/img_b.png')] bg-no-repeat bg-cover flex w-fill h-80  text-[#0f172a] mb-4 justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Contact Us
        </h1>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUsPage;
