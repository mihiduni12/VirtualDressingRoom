import React, { useEffect, useState } from "react";
import VanImage from "../../images/van1.png"; // Importing van image
import { Link } from "react-router-dom";

// const van = [
//   {
//     topic: "Van 1",
//     image: VanImage,
//     capacity: 20,
//   },
//   {
//     topic: "Van 2",
//     image: VanImage,
//   },
//   {
//     topic: "Van 3",
//     image: "van_image3.jpg",
//   },
//   {
//     topic: "Van 4",
//     image: "van_image4.jpg",
//   },
//   {
//     topic: "Van 5",
//     image: "van_image5.jpg",
//   },
//   {
//     topic: "Van 6",
//     image: "van_image6.jpg",
//   },
//   {
//     topic: "Van 7",
//     image: "van_image7.jpg",
//   },
//   // Add more vans as needed
// ];

function VanComponent() {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/cars?category=Van"
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
    <div className="flex flex-wrap  bg-[#c7aa6d]">
      {cars.map((van, index) => (
        <div
          key={index}
          className="w-64 p-4 m-4 border border-gray-300 rounded-md bg-white"
        >
          <h2 className="text-lg font-bold mb-2">{van.brand}</h2>
          <img
            src={van.imageUrl}
            alt={van.brand}
            className="w-full h-40 object-cover mb-2"
          />
          {van.maxPersons && (
            <p className="text-sm">Size: {van.maxPersons}</p>
          )}
          <Link to={`/vehicle/${van._id}`}>
            <button className="bg-[#879d62] text-black font-bold py-2 px-4 rounded">
              Add To Closet
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

function Vans() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-100">
      <VanComponent />
    </div>
  );
}

export default Vans;
