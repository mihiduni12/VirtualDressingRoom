import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const AdminCarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cars");
        if (!response.ok) {
          throw new Error("Failed to fetch car data");
        }
        const responseData = await response.json();
        setCars(responseData.cars);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car data:", error);
        setError(error.message);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/cars/${id}`);
      setCars((prevCars) => prevCars.filter((car) => car._id !== id));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const generatePDF = () => {
    console.log("Download Report button clicked");
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Cloth List Report", 14, 22); // Corrected report name

    const tableColumn = ["Brand", "Price", "Size"];
    const tableRows = [];

    cars.forEach((car) => {
      const carData = [
        car.brand,
        car.price ? `$${car.price.toFixed(2)}` : "N/A", // Corrected formatting
        car.maxPersons,
      ];
      tableRows.push(carData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 30 });
    doc.save("cloth-list-report.pdf"); // Corrected file name
  };

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-bold">Car List</h2>
        <div>
          <Link to="/add-car">
            <button className="text-white bg-black px-4 py-2 border hover:text-black hover:bg-white transition-colors duration-300 rounded-xl">
              Add Car
            </button>
          </Link>
          <button
            style={{
              marginLeft: "10px",
              backgroundColor: "blue",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
            onClick={generatePDF}
          >
            Download Report
          </button>
        </div>
      </div>

      <table className="min-w-full rounded-xl overflow-hidden">
        <thead className="bg-yellowDr">
          <tr>
            <th className="border px-4 py-2 text-left">Image</th>
            <th className="border px-4 py-2 text-left">Brand</th>
            <th className="border px-4 py-2 text-left">Price</th>
            <th className="border px-4 py-2 text-left">Size</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id} className="bg-white hover:bg-yellow">
              <td className="border px-4 py-2">
                <img
                  src={car.imageUrl}
                  alt={car.brand}
                  className="w-24 h-auto rounded-md"
                />
              </td>
              <td className="border px-4 py-2">{car.brand}</td>
              <td className="border px-4 py-2">
                {car.price ? `$${car.price.toFixed(2)}` : "N/A"}
              </td>
              <td className="border px-4 py-2">{car.maxPersons}</td>
              <td className="border px-4 py-2 flex flex-col h-fit">
                <button
                  className="pl-2 pr-2 pt-2 pb-2 border-none font-semibold mb-2 transition-colors w-full duration-300 rounded-xl bg-red hover:bg-lightRed"
                  onClick={() => handleDelete(car._id)}
                >
                  Delete
                </button>
                <Link to={`/update-car/${car._id}`}>
                  <button className="pl-2 pr-2 pt-2 pb-2 border-none rounded-xl w-full font-semibold bg-greenNa hover:bg-green">
                    Update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCarList;
