import {} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../03_Pages/01_Home/Home";
import Expertise from "../../03_Pages/02_Expertise/Expertise";
import Work from "../../03_Pages/03_Work/Work";
import Contact from "../../03_Pages/04_Contact/Contact";
import ErrorPage from "../../03_Pages/05_ErrorPage/ErrorPage";
import { AnimatePresence } from "framer-motion";
import Terms from "../../03_Pages/06_Terms_And_Conditions/Terms";

const Routers = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
