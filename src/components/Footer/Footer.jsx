import React from "react";
import "./Footer.css";

function Footer({ year, name }) {
  return (
    <>
      <footer>
        <section className="footer-section">
          <section className="info-section">
            <p>
              <b>Address</b>
            </p>
            <p>233 Retriver Road</p>
            <p>155 89 Terrier Town</p>
          </section>
          <section className="info-section">
            <p>
              <b>Contact</b>
            </p>
            <p>
              <b>Phone: </b>+46 70 000 00 00
            </p>
            <p>
              <b>Email: </b>hello@saltypaws.com
            </p>
          </section>
          <section className="info-section">
            <p>
              <b>More</b>
            </p>
            <p>
              Breed data from{" "}
              <a href="https://docs.thedogapi.com/">The Dog API</a>
            </p>
          </section>
        </section>
        <p className="copywright">
          © {year} {name}. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
