import React from "react";
import "./Donate.css";
import { useState } from "react";
import BackToHomeButton from "../Other/BackToHomeButton";

function DonateForm() {
  const [donate, setDonate] = useState("");

  //
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Donated");
    //
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const name = formData.get("fullName");
    formElement.reset();

    setDonate(name);
  }

  return (
    <>
      {/* */}
      {donate === "" ? (
        <form
          onSubmit={handleSubmit}
          action={handleSubmit}
          className="donate-form"
        >
          <input
            type="name"
            name="fullName"
            className="donate-input-name"
            placeholder="First- & lastname"
          />

          <input
            type="email"
            name="email"
            className="donate-input-info"
            placeholder="Email"
          />

          <input
            type="phone"
            name="phone"
            className="donate-input-info"
            placeholder="Phone nr for swish"
          />
          <button className="donate-button">Donate</button>
        </form>
      ) : (
        <section>
          <p>Thank you {donate} for your donation!</p>
          <BackToHomeButton />
        </section>
      )}
    </>
  );
}

export default DonateForm;
