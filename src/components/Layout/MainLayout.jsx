import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";

function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer year={2026} name={"SaltyPaws"} />
    </>
  );
}

export default MainLayout;
