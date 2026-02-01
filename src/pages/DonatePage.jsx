import React from "react";

function DonatePage() {
  return (
    <>
      <h2>Donate</h2>
      <form action="fill">
        <input type="text" placeholder="First- and lastname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone nr for swish" />
      </form>
      <button>Donate</button>
    </>
  );
}

export default DonatePage;
