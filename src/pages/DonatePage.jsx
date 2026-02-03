import React from "react";
import DonateForm from "../components/Donate/DonateForm";

function DonatePage() {
  return (
    <>
      <article className="donate-page">
        <section className="donate-bg">
          <h2>Donate</h2>
          <DonateForm />
        </section>
      </article>
    </>
  );
}

export default DonatePage;
