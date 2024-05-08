import {} from "react";
import Header from "../02_Components/01_NavBar/01_Header/Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default AppLayout;
