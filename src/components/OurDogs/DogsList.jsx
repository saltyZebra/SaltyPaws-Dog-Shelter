import React from "react";
import "./OurDogs.css";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useState } from "react";

function DogsList({ dogsArray }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <>
      <ul className="dog-ul">
        {dogsArray.map((dog) => (
          <li key={dog.id} className="dog-li">
            <section className="dog-img">
              <img src={dog.image} />
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
                <span className="material-symbols-outlined">favorite</span>
              </section>
              <p onClick={handleClick} style={{ cursor: "pointer" }}>
                {isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
              </p>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DogsList;
