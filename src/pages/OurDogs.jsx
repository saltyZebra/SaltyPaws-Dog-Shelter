import React from "react";
import DogsList from "../components/OurDogs/DogsList";

function OurDogs({ dogsArray }) {
  return (
    <>
      <h2>Our Dogs</h2>
      <DogsList dogsArray={dogsArray} />
    </>
  );
}

export default OurDogs;
