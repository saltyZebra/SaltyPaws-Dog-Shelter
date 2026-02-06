import React from "react";
import "./Donate.css";
import { useState } from "react";
import BackToHomeButton from "../Other/BackToHomeButton";

function DonateForm() {
  const [donate, setDonate] = useState("");
  const [loading, setLoading] = useState(false);

  //
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Donated");
    //
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const name = formData.get("fullName");
    formElement.reset();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDonate(name);
    }, 1500);
  }

  return (
    <>
      {/* */}
      {donate === "" && !loading ? (
        <form
          onSubmit={handleSubmit}
          action={handleSubmit}
          className="donate-form"
        >
          <input
            type="name"
            name="fullName"
            required
            className="donate-input-name"
            placeholder="First- & lastname"
          />

          <input
            type="email"
            name="email"
            required
            className="donate-input-info"
            placeholder="Email"
          />

          <input
            type="phone"
            name="phone"
            required
            className="donate-input-info"
            placeholder="Phone nr for swish"
          />
          <button className="donate-button">Donate</button>
        </form>
      ) : loading ? (
        <section>
          <p>Navigerar över dig till Swish...</p>
        </section>
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
