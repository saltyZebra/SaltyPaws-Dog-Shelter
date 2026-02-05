import React from "react";
import "./OurDogs.css";

//
function DogsList({ dogsArray }) {
  return (
    <>
      <ul className="dog-ul">
        {dogsArray.map((dog) => (
          <li key={dog.id} className="dog-li">
            <section className="dog-img-section">
              <img src={dog.image} className="dog-img" />
            </section>
            <section className="dog-info-section">
              <h4>{dog.name}</h4>
              <section className="dog-info">
                <p>Age: {dog.age} years old</p>
                <p>Breed: {dog.breed}</p>
              </section>
              <section className="dog-info">
                <h4>About</h4>
                <p>{dog.personality}</p>
              </section>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DogsList;
