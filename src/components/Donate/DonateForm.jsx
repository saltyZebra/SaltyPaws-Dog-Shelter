import React from "react";
import "./Donate.css";

function DonateForm() {
  // funtion som hindrar en omladdning av sidan vid klick på donate-knapp
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Donated");
    // Hämtar form från nuvarande området som används, skapar en plats för Data som
    // skrivs in i form, och sen hämtar data och använder det någon annanstans
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const name = formData.get("fullName");
    formElement.reset();

    return <p>Thank you {name} for your donation!</p>;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action="fill"
        className="donate-form"
        method="post"
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
    </>
  );
}

export default DonateForm;
