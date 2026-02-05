import React, { useState } from "react";

function SearchBar({ breeds }) {
  const [breedList, setBreedList] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState(null); //

  //
  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(breedList.toLowerCase())
  );

  //
  const handleChange = (e) => {
    setBreedList(e.target.value);
    setShowResults(true);
    setSelectedBreed(null);
  };

  const handleSelect = (breed) => {
    setBreedList(breed.name);
    setSelectedBreed(breed);
    setShowResults(false);
  };

  return (
    <section className="search-wrapper">
      <section className="search-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search a breed"
          value={breedList}
          onChange={handleChange}
          onFocus={() => setShowResults(true)}
        />
      </section>

      {showResults && breedList && (
        <ul className="dropdown-list">
          {/* */}
          {filteredBreeds.length > 0 ? (
            filteredBreeds.map((breed) => (
              <li
                key={breed.id}
                style={{ cursor: "pointer" }}
                onClick={() => handleSelect(breed)}
              >
                {breed.name}
              </li>
            ))
          ) : (
            //
            <li className="no-results">No breeds found</li>
          )}
        </ul>
      )}
      {/* */}
      {selectedBreed ? (
        <section className="breed-info">
          <img
            className="breed-img"
            src={selectedBreed.image.url}
            alt={selectedBreed.name}
          />
          <h4>{selectedBreed.name}</h4>
          <p>
            <b>Life span: </b>
            {selectedBreed.life_span} years
          </p>
          <p>
            <b>Description: </b>
            {selectedBreed.description}
          </p>
          <p>
            <b>Temperament: </b>
            {selectedBreed.temperament}
          </p>
        </section>
      ) : null}
    </section>
  );
}

export default SearchBar;
