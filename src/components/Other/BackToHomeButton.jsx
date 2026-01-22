import React from "react";
import { NavLink } from "react-router-dom";

function BackToHomeButton() {
  return (
    <>
      <NavLink to={"/"}>
        <button>Home Page</button>
      </NavLink>
    </>
  );
}

export default BackToHomeButton;
