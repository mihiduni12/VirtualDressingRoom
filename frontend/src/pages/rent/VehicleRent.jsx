import React, { useEffect, useState } from "react";
import Buttons from "../../components/Header/Buttons";
import SearchBar from "../../components/Header/SearchBar";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import LogoRentals from "../../components/rental/logoRentals";
import { Link, useParams, useNavigate } from "react-router-dom";

function VehicalRental() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    occasion: "",
    note: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [storedData, setStoredData] = useState([]);
  const [errors, setErrors] = useState({}); // State to store errors

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/cars/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch car details");
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
  }, [id]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];
    setStoredData(savedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit the note to 50 characters
    if (name === "note" && value.length > 50) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        note: "Note cannot exceed 50 characters",
      }));
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error when the user changes the input
    }));
  };

  const handleNext = () => {
    // Validate the current step
    if (currentStep === 1 && !formData.name) {
      setErrors({ name: "Name is required" });
      return;
    }
    if (currentStep === 2 && (!formData.color || !formData.occasion)) {
      setErrors({
        color: !formData.color ? "Color is required" : "",
        occasion: !formData.occasion ? "Occasion is required" : "",
      });
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final validation for step 3
    if (!formData.note) {
      setErrors({ note: "Note is required" });
      return;
    }

    const updatedData = [...storedData, { ...formData, imageUrl: car.imageUrl }];
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setStoredData(updatedData);
    setFormData({ name: "", color: "", occasion: "", note: "" });

    alert("Outfit added successfully!");

    // Navigate to closet page with form data and image URL
    navigate("/closet", { state: { ...formData, imageUrl: car.imageUrl } });
  };

  return (
    <div className="bg-[#ccdae2]">
      <div className="bg-yellow h-[114px] w-full fixed z-20">
        <LogoRentals />
        <Buttons />
        <SearchBar />
        <Navbar />
      </div>

      <br />

      <div className="flex justify-center items-center h-screen mt-[130px]">
        {loading ? (
          <p>Loading...</p>
        ) : car ? (
          <div className="flex flex-col items-center">
            <img
              src={car.imageUrl}
              alt={car.brand}
              className="w-[400px] h-[250px] rounded-[22px] mb-4"
            />
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Enter Your Name</h2>
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-6">
                      <label className="block text-gray-700 text-lg">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-4 text-lg"
                        placeholder="Enter your name"
                        required
                      />
                      {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#2e7aa6] text-white p-3 rounded-md hover:bg-[#FF8C00] text-lg"
                    >
                      Next
                    </button>
                  </form>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Select Item Details</h2>
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-6">
                      <label className="block text-gray-700 text-lg">Color</label>
                      <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-4 text-lg"
                        placeholder="Enter color of the item"
                        required
                      />
                      {errors.color && <p className="text-red-500">{errors.color}</p>}
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 text-lg">Occasion</label>
                      <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-4 text-lg"
                        required
                      >
                        <option value="">Select Occasion</option>
                        <option value="formal">Formal</option>
                        <option value="party">Party</option>
                        <option value="casual">Casual</option>
                        <option value="sportswear">Sportswear</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.occasion && <p className="text-red-500">{errors.occasion}</p>}
                    </div>
                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="bg-[#2e7aa6] text-white p-3 rounded-md hover:bg-[#FF8C00] text-lg"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-[#2e7aa6] text-white p-3 rounded-md hover:bg-[#FF8C00] text-lg"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Add a Note</h2>
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-6">
                      <label className="block text-gray-700 text-lg">Note</label>
                      <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-4 text-lg"
                        placeholder="Add any notes"
                        required
                      />
                      {errors.note && <p className="text-red-500">{errors.note}</p>}
                    </div>
                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="bg-[#2e7aa6] text-white p-3 rounded-md hover:bg-[#FF8C00] text-lg"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-[#2e7aa6] text-white p-3 rounded-md hover:bg-[#FF8C00] text-lg"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>Car not found</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default VehicalRental;
