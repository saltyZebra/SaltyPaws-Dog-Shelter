import React, { useEffect, useState } from "react";
import { fetchDogBreedsAPI } from "../../Services/breedDatA";
import SearchBar from "./SearchBar";

function Adopt() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDogBreedsAPI()
      .then((data) => setBreeds(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Data laddas...</p>;
  }

  if (error) {
    return (
      <p style={{ color: "darkRed" }}>
        Fel vid datahämtning av hundraser: {error}
        <br />
        Försök igen senare.
      </p>
    );
  }

  return (
    <>
      <SearchBar breeds={breeds} />
    </>
  );
}

export default Adopt;
