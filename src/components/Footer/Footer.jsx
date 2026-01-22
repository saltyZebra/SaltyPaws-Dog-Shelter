import React from "react";

function Footer({ year, name }) {
  return (
    <>
      <p>
        © {year} {name}. All rights reserved.
      </p>
    </>
  );
}

export default Footer;
