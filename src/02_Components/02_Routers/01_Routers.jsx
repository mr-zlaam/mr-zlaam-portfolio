import {} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Contact, ErrorPage, Expertise, Home, Terms, Work } from "../../index";
import { AnimatePresence } from "framer-motion";

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
