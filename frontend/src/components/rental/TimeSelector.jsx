import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parse } from "date-fns";

const TimeSelector = ({ car }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [hours, setHours] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const price = car.price * hours;
  const User_ID = "001";
  const category = "001";
  const status = "Unpaid";

  const handleStartTimeChange = (date) => {
    setStartTime(date);
  };

  const handleEndTimeChange = (date) => {
    if (startTime && date < startTime) {
      setEndTime(null);
      setErrorMessage("Choose correct date");
    } else {
      setEndTime(date);
      setErrorMessage("");
    }
  };

  useEffect(() => {
    calculateHours();
  }, [startTime, endTime]);

  const calculateHours = () => {
    if (startTime && endTime) {
      const diffInMs = endTime.getTime() - startTime.getTime();
      const hours = diffInMs / (1000 * 60 * 60);
      if (hours >= 0) {
        setHours(hours.toFixed(2));
      } else {
        setHours(null);
      }
    } else {
      setHours(null);
    }
  };

  const handleSubmit = () => {
    if (!endTime) {
      setErrorMessage("Please select an end time");
      return;
    }

    const data = {
      User_ID: User_ID,
      date: new Date().toISOString(),
      starttime: startTime.toISOString(),
      endtime: endTime.toISOString(),
      price: price,
      status: status,
      category: category
    };

    axios.post("http://localhost:3000/api/rents/", data)
      .then(response => {
        console.log("Data saved successfully:", response.data);
        // Reset the form or perform any other necessary actions upon successful save
      })
      .catch(error => {
        console.error("Error saving data:", error);
        // Handle any errors that occur during the save process
      });
  };

  return (
    <div className="max-w-md bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Select Time</h2>
      <div className="flex justify-between">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="startTime"
            className="block text-gray-700 font-semibold mb-2"
          >
            Start Time
          </label>
          <DatePicker
            id="startTime"
            selected={startTime}
            onChange={handleStartTimeChange}
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeSelect
            timeFormat="h:mm aa"
            timeIntervals={15}
            timeCaption="Time"
            parseDate={(str) => parse(str, "MM/dd/yyyy h:mm aa", new Date())}
            className="block w-full bg-gray-100 border border-gray-300 rounded p-2 focus:outline-none focus:bg-white"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            htmlFor="endTime"
            className="block text-gray-700 font-semibold mb-2"
          >
            End Time
          </label>
          <DatePicker
            id="endTime"
            selected={endTime}
            onChange={handleEndTimeChange}
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeSelect
            timeFormat="h:mm aa"
            timeIntervals={15}
            timeCaption="Time"
            parseDate={(str) => parse(str, "MM/dd/yyyy h:mm aa", new Date())}
            className="block w-full bg-gray-100 border border-gray-300 rounded p-2 focus:outline-none focus:bg-white"
          />
          {errorMessage && (
            <p className="text-red-500">{errorMessage}</p>
          )}
        </div>
      </div>
      {hours !== null && (
        <div>
          <p className="mt-2 text-gray-700">
            Total Amount: {hours} * {car.price} =
            <span className="font-bold">Rs. {hours * car.price} </span>
          </p>
        </div>
      )}
      <div className="mt-4 text-right">
        <button
          onClick={handleSubmit}
          className={`bg-[#eb3d12] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            !hours || hours <= 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!hours || hours <= 0 || errorMessage}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default TimeSelector;
