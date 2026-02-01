import React from "react";
import "./OurDogs.css";

function DogsList({ dogsArray }) {
  return (
    <>
      <ul className="dog-ul">
        {dogsArray.map((dog) => (
          <li key={dog.id} className="dog-li">
            <img src={dog.image} className="dog-img" />
            <h4>{dog.name}</h4>
            <section className="dog-info">
              <p>Age: {dog.age} years old</p>
              <p>Breed: {dog.breed}</p>
            </section>
            <section className="dog-info">
              <h4>About</h4>
              <p>{dog.personality}</p>
              <span className="material-symbols-outlined">favorite</span>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DogsList;
