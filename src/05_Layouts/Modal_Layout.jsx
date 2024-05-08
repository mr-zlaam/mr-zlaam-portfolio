import {} from "react";
import { Outlet } from "react-router-dom";

function Modal_Layout() {
  return (
    <>
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default Modal_Layout;
