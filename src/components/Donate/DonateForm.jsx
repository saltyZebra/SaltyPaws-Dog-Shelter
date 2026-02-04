import React from "react";
import "./Donate.css";
import { useState } from "react";

function DonateForm() {
  const [donate, setDonate] = useState("");
  // funtion som hindrar en omladdning av sidan vid klick på donate-knapp
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Donated");
    // Hämtar form från nuvarande input som används, skapar en plats för Data som
    // skrivs in i form, och sen hämtar data och använder det någon annanstans
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const name = formData.get("fullName");
    formElement.reset();

    setDonate(name);
  }

  return (
    <>
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
        <p>Thank you {donate} for your donation!</p>
      )}
    </>
  );
}

export default DonateForm;
