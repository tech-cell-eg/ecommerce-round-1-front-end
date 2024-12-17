import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import FooterComponent from "./Footer";

export default function Layout() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <Outlet></Outlet>
      <FooterComponent/>
      {/* footer */}
    </>
  );
}
