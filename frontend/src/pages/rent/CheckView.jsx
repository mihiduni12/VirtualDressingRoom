import React from "react";

function CheckView() {
  return (
    <div>
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
            <p className="text-sm">Category: {car.category}</p>
            <p className="text-sm">Fuel Type: {car.fuelType}</p>
            {car.maxPersons && (
              <p className="text-sm">Capacity: {car.maxPersons}</p>
            )}
            <p className="text-sm">Price: {car.price}</p>
            <Link to="/Vehicle">
              <button className="bg-[#935c48] text-black font-bold py-2 px-4 rounded">
                Rent Vehicle
              </button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default CheckView;
