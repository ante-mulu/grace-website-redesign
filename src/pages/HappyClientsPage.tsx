import Projects from "../components/HappyClients/Projects";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

const HappyClientsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/assets/img_b.png')] bg-no-repeat bg-cover flex w-fill h-80 text-[#0f172a]  justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {" "}
          Happy Clients
        </h1>
      </div>
      <Projects />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default HappyClientsPage;
