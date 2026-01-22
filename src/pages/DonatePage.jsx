import React from "react";

function DonatePage() {
  return (
    <>
      <h2>Donate</h2>
      <form action="fill">
        <input type="text" placeholder="För- och efternamn" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefonnummer för swish" />
      </form>
      <button>Donate</button>
    </>
  );
}

export default DonatePage;
