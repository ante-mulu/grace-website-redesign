import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUsPage from "../pages/AboutUsPage";
import ExpertisePage from "../pages/ExpertisePage";
import SaaSServicePage from "../pages/SaaSServicePage";
import ContactUsPage from "../pages/ContactUsPage";
import ERPImplementationPage from "../pages/ERPImplementationPage";
import HappyClientsPage from "../pages/HappyClientsPage";
import TrainingPage from "../pages/TrainingPage";
import ScrollToTop from "../components/shared/ScrollToTop";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/happy-clients" element={<HappyClientsPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/SaaS-service" element={<SaaSServicePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/erp-implementation" element={<ERPImplementationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
