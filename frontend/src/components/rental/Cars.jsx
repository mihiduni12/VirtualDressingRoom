import React, { useEffect, useState } from "react";
import BenzImage from "../../images/benz.png"; // Correcting the image import
import { Link } from "react-router-dom";
const cars = [
  {
    brand: "Merzedez Benz",
    imageUrl: BenzImage,
    capacity: 20,
  },
  {
    brand: "Axio",
    imageUrl: BenzImage,
  },
  {
    brand: "car 3",
    imageUrl: "image3.jpg",
  },
  {
    brand: "car 4",
    imageUrl: "image4.jpg",
  },
  {
    brand: "car 5",
    imageUrl: "image5.jpg",
  },
  {
    brand: "car 6",
    imageUrl: "image6.jpg",
  },
  {
    brand: "car 7",
    imageUrl: "image7.jpg",
  },
  // Add more articles as needed
];
function Cars() {
  const [loading, setLoading] = useState(true);
  const [cars1, setCars1] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cars");
        const responseData = await response.json();
        if (responseData && Array.isArray(responseData.cars)) {
          setCars1(responseData.cars);
        } else {
          console.error(
            "Fetched data does not contain the expected array:",
            responseData
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="flex flex-wrap justify-center bg-[#c7aa6d]">
      {loading ? (
        <p>Loading...</p>
      ) : (
        cars1.map((car, index) => (
          <div
            key={index}
            className="w-64 p-4 m-4 border border-gray-300 rounded-md bg-white"
          >
            <h2 className="text-lg font-bold mb-2">{car.brand}</h2>
            <img
              src={car.imageUrl}
              alt={car.brand}
              className="w-full h-40 object-cover mb-2"
            />
            {car.maxPersons && (
              <p className="text-sm">Size: {car.maxPersons}</p>
            )}
            <Link to="/Vehicle">
              <button className="bg-[#935c48] text-black font-bold py-2 px-4 rounded">
                Add To 
              </button>
            </Link>

            <h1></h1>
          </div>
        ))
      )}
    </div>
  );
}

// function () {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <CarComponent />
//     </div>
//   );
// }

export default Cars;
