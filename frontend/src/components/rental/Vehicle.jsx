import React, { useEffect, useState } from "react";
import TimeSelector from "./TimeSelector";

const CarDetails = ({ carId }) => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/cars/${carId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch car details");
          console.log(`http://localhost:3000/api/cars/${carId}`);
        }
        const data = await response.json();
        setCar(data.car);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car details:", error);
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [carId]);

  return (
    <div className="flex flex-row items-left h-screen mt-48">
      <div className="ml-72">
        {loading ? (
          <p>Loading...</p>
        ) : car ? (
          <>
            <h1 className="text-[40pt] font-CantoraOne">{car.brand}</h1>
            <h2 className="text-[20pt] font-Times New Roman">{`Rs.${car.price} Rent per hour/-`}</h2>
            <h3 className="text-[20pt] font-Times New Roman">
              {`Fuel type: ${car.fuelType}`}
              <br />
              {`Max Persons: ${car.maxPersons}`}
            </h3>
            <br />
            <br />
            <br />
            <TimeSelector />
            <br />
            <br />
          </>
        ) : (
          <p>Car not found</p>
        )}
      </div>
      {car && (
        <img
          src={car.imageUrl}
          alt={car.brand}
          className="w-[500px] h-[400px] absolute right-0 mr-[150px] mt-[120px] rounded-[22px]"
        />
      )}

    </div>
  );
};

export default CarDetails;
