import React, { useEffect, useState } from "react";
import BusImage from "../../images/bus1.png"; // Correcting the image import
import { Link } from "react-router-dom";

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
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/cars?category=Bus"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch car data");
        }
        const responseData = await response.json();
        setCars(responseData.cars);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCars();
  }, []);
  return (
    <div className="flex flex-wrap justify-center bg-[#ccdae2]">
      {cars.map((x, index) => (
        <div
          key={index}
          className="w-64 p-4 m-4 border border-gray-300 rounded-md bg-white"
        >
          <h2 className="text-lg font-bold mb-2">{x.brand}</h2>{" "}
          {/* Corrected to article.topic */}
          <img
            src={x.imageUrl}
            alt={x.brand}
            className="w-full h-40 object-cover mb-2"
          />
          {x.maxPersons && (
            <p className="text-sm">Size: {x.maxPersons}</p> // Render capacity if it exists
          )}
          <Link to={`/vehicle/${x._id}`}>
            <button className="bg-[#879d62] text-black font-bold py-2 px-4 rounded">
              {/* Corrected to text-black */}
              Add To Closet
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

function Bus() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <BusComponent />
    </div>
  );
}

export default Bus;
