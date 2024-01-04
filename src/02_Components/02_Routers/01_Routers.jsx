import {} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../03_Pages/01_Home/Home";
import Expertise from "../../03_Pages/02_Expertise/Expertise";
import Work from "../../03_Pages/03_Work/Work";
import Contact from "../../03_Pages/04_Contact/Contact";
import ErrorPage from "../../03_Pages/05_ErrorPage/ErrorPage";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Routers;
