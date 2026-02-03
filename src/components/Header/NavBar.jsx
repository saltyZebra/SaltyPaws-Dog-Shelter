import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <section className="logo-links">
          <HeaderLogo /> |<NavLink to={"/"}>Home</NavLink> |
          <NavLink to={"/ourdogs"}>Our Dogs</NavLink> |
          <NavLink to={"/becomeapart"}>Become A Part</NavLink>
        </section>
        <section>
          <NavLink to={"/donate"}>Donate</NavLink>
        </section>
      </nav>
    </>
  );
}

export default NavBar;
