import React, { useState } from "react";

function SearchBar({ breeds }) {
  const [breedList, setBreedList] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState(null); // håller hela breed-objektet för att kunna visa info

  // Variabel för att filtrera genom alla breeds i listan - göra så att namnen matchar med lowercase
  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(breedList.toLowerCase())
  );

  // Varje gång man skriver något i searchbaren ändras värdet som matchar listan med det event som är target
  const handleChange = (e) => {
    setBreedList(e.target.value);
    setSelectedBreed(null);
    setShowResults(true);
  };

  const handleSelect = (breed) => {
    setBreedList(breed.name); // visar namnet i input
    setSelectedBreed(breed); // sparar breed info
    setShowResults(false); // slutar visa resultat
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
          {/* om det finns 1 eller fler breeds i listan som matchar resultat och lista 
          - mappar igenom listan och skapar list-item för varje */}
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
            // om inget matchar listan så visas nedan.
            <li className="no-results">No breeds found</li>
          )}
        </ul>
      )}
      {selectedBreed && (
        <section className="breed-info">
          <img
            className="breed-img"
            src={selectedBreed.image.url}
            alt={selectedBreed.name}
          />
          <h4>{selectedBreed.name}</h4>
          <p>
            <b>Life span: </b>
            {selectedBreed.life_span}
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
      )}
    </section>
  );
}

export default SearchBar;
