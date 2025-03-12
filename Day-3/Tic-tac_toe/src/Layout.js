import { Outlet } from "react-router-dom";
import Nav from "./navbar";
// import "./nav.css";

const Layout = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
