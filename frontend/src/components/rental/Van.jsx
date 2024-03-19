import React from "react";
import VanImage from "../../images/van1.png"; // Importing van image

const van = [
  {
    topic: "Van 1",
    image: VanImage,
    capacity: 20,
  },
  {
    topic: "Van 2",
    image: VanImage,
  },
  {
    topic: "Van 3",
    image: "van_image3.jpg",
  },
  {
    topic: "Van 4",
    image: "van_image4.jpg",
  },
  {
    topic: "Van 5",
    image: "van_image5.jpg",
  },
  {
    topic: "Van 6",
    image: "van_image6.jpg",
  },
  {
    topic: "Van 7",
    image: "van_image7.jpg",
  },
  // Add more vans as needed
];

function VanComponent() {
  return (
    <div className="flex flex-wrap justify-center bg-[#c7aa6d]">
      {van.map((van, index) => (
        <div
          key={index}
          className="w-64 p-4 m-4 border border-gray-300 rounded-md bg-white"
        >
          <h2 className="text-lg font-bold mb-2">{van.topic}</h2>
          <img
            src={van.image}
            alt={van.topic}
            className="w-full h-40 object-cover mb-2"
          />
          {van.capacity && (
            <p className="text-sm">Capacity: {van.capacity}</p>
          )}
          <button className="bg-[#879d62] text-black font-bold py-2 px-4 rounded">
            Rent Vehicle
          </button>
        </div>
      ))}
    </div>
  );
}

function Vans() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <VanComponent />
    </div>
  );
}

export default Vans;
