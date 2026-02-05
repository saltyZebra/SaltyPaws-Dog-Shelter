import React from "react";
import DogsList from "../components/OurDogs/DogsList";

//
const ourDogs = [
  {
    id: 1,
    name: "Bella",
    breed: "Golden Retriever",
    age: 4,
    personality:
      "Friendly, playful, and loves people. Bella is always happy and gets along well with both children and other dogs.",
    image: "https://place.dog/300/300?1",
  },
  {
    id: 2,
    name: "Max",
    breed: "Labrador Retriever",
    age: 6,
    personality:
      "Calm and loyal. Max enjoys long walks and is very easy to train. He is gentle, patient, and loves spending time with his family.",
    image: "https://place.dog/300/300?2",
  },
  {
    id: 3,
    name: "Luna",
    breed: "Border Collie",
    age: 3,
    personality:
      "Smart and energetic. Luna needs plenty of mental stimulation and loves learning new tricks. She thrives when she has tasks to focus on.",
    image: "https://place.dog/300/300?3",
  },
  {
    id: 4,
    name: "Charlie",
    breed: "French Bulldog",
    age: 5,
    personality:
      "Charming and a bit stubborn. Charlie enjoys relaxing but loves attention and affection. He has a playful personality and a big heart.",
    image: "https://place.dog/300/300?4",
  },
  {
    id: 5,
    name: "Molly",
    breed: "Cocker Spaniel",
    age: 2,
    personality:
      "Happy and curious. Molly is very social and enjoys being part of everything. She loves meeting new people and exploring new places.",
    image: "https://place.dog/300/300?5",
  },
  {
    id: 6,
    name: "Rocky",
    breed: "German Shepherd",
    age: 7,
    personality:
      "Protective and intelligent. Rocky is loyal to his family and enjoys structure and training. He is confident, calm, and very dependable.",
    image: "https://place.dog/300/300?6",
  },
];

function OurDogs() {
  return (
    <>
      <h2>Our Dogs</h2>
      <DogsList dogsArray={ourDogs} /> {/* */}
    </>
  );
}

export default OurDogs;
