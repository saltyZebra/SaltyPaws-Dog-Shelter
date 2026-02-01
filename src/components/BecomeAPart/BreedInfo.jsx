import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchDogBreedsAPI } from "../../Services/breedDatA";

function Adopt() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let [name, setName] = useState("Show more");

  function handleClick() {
    setName((prevName) => !prevName);
  }

  useEffect(() => {
    fetchDogBreedsAPI()
      .then((data) => {
        setBreeds(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  const ifLoading = loading ? <p>Data laddas...</p> : "";
  const ifError = error ? <p>Error: {error}</p> : "";

  return (
    <>
      <ol>
        {ifLoading}
        {ifError}
        {breeds.slice(0, 50).map((breed) => (
          <li key={breed.id}>
            <p>
              <b>Dog breed: </b>
              {breed.name}
            </p>
            <p>
              <b>Life-span: </b>
              {breed.life_span} years
            </p>
            <p>
              <b>Temperament: </b>
              {breed.temperament}
            </p>
            <p>
              <b>Description: </b>
              {breed.description}
            </p>
          </li>
        ))}
      </ol>
      <button onClick={handleClick}>{name ? "Show more" : "Show less"}</button>
    </>
  );
}

export default Adopt;
