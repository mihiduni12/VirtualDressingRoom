import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Buttons from "../../components/Header/Buttons";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import LogoRentals from "../../components/rental/logoRentals";

const Vform = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, index } = location.state || {}; // Get passed data and index

  // Pre-fill form with passed data
  const [formData, setFormData] = useState({
    name: data?.name || "",
    color: data?.color || "",
    occasion: data?.occasion || "",
    note: data?.note || "",
    imageUrl: data?.imageUrl || "", // Image URL field
  });

  useEffect(() => {
    if (!data) {
      // If there's no data, redirect back to the closet page
      navigate("/closet");
    }
  }, [data, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get current data from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];

    // Update the data at the correct index
    storedData[index] = formData;

    // Save updated data to localStorage
    localStorage.setItem("formData", JSON.stringify(storedData));

    // Display success alert
    window.alert("Outfit updated successfully!");

    // Redirect back to the closet page
    navigate("/closet");
  };

  return (
    <div className="bg-[#ccdae2] min-h-screen">
      {/* Header Section */}
      <header className="bg-yellow h-[114px] w-full z-20 fixed top-0 left-0"> {/* Fixed header */}
        <LogoRentals />
        <Buttons />
        <Navbar />
      </header>

      <div className="mt-[114px] p-4"> {/* Adjusted margin to match header height */}
        <h1 className="text-2xl font-bold mb-6 text-center">Update Your Closet</h1>

        <form onSubmit={handleSubmit} className="mb-8 flex flex-col items-center">
          {/* Displaying the Image with a Smaller Size at the Top Center */}
          <div className="mb-4">
            <img
              src={formData.imageUrl}
              alt="Item"
              className="w-40 h-40 object-cover rounded-md mb-2"
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter item name"
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700">Color</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter item color"
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700">Occasion</label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Occasion</option>
              <option value="formal">Formal</option>
              <option value="party">Party</option>
              <option value="casual">Casual</option>
              <option value="sportswear">Sportswear</option>
            </select>
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700">Note</label>
            <input
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter item note"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-[#2e7aa6] text-white p-3 rounded-md hover:bg-[#1d5067] text-lg"
          >
            Update
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Vform;
