import React from "react";
import BusImage from "../../images/bus1.png"; // Correcting the image import

const Buss = [
  {
    topic: "Toyota Bus",
    image: BusImage,
    capacity: 20,
  },
  {
    topic: "Axio",
    image: BusImage,
  },
  {
    topic: "Bus 3",
    image: "image3.jpg",
  },
  {
    topic: "Bus 4",
    image: "image4.jpg",
  },
  {
    topic: "Bus 5",
    image: "image5.jpg",
  },
  {
    topic: "Bus 6",
    image: "image6.jpg",
  },
  {
    topic: "Bus 7",
    image: "image7.jpg",
  },
  // Add more articles as needed
];

function BusComponent() {
  return (
    <div className="flex flex-wrap justify-center bg-[#c7aa6d]">
      {Buss.map((x, index) => (
        <div
          key={index}
          className="w-64 p-4 m-4 border border-gray-300 rounded-md bg-white"
        >
          <h2 className="text-lg font-bold mb-2">{x.topic}</h2> {/* Corrected to article.topic */}
          <img
            src={x.image}
            alt={x.topic}
            className="w-full h-40 object-cover mb-2"
          />
          {x.capacity && (
            <p className="text-sm">Capacity: {x.capacity}</p> // Render capacity if it exists
          )}
          <button className="bg-[#879d62] text-black font-bold py-2 px-4 rounded"> {/* Corrected to text-black */}
            Rent Vehicle
          </button>
        </div>
      ))}
    </div>
  );
}

function Bus() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <BusComponent />
    </div>
  );
}

export default Bus;
