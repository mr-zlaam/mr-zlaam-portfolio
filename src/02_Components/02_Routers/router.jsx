import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../05_Layouts/AppLayout";
import Home from "../../03_Pages/01_Home/Home";
import Expertise from "../../03_Pages/02_Expertise/Expertise";
import Work from "../../03_Pages/03_Work/Work";
import Contact from "../../03_Pages/04_Contact/Contact";
import ErrorPage from "../../03_Pages/05_ErrorPage/ErrorPage";
import Modal_Layout from "../../05_Layouts/Modal_Layout";
import Project_Modal from "../../04_Variables_And_StyleComponents/Project_Modal/Project_Modal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "expertise",
        element: <Expertise />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/project/detail/:title",
    element: <Modal_Layout />,
    children: [
      {
        path: "",
        element: <Project_Modal />,
      },
    ],
  },
]);
