import React, { useState } from "react";

const Events = [
  {
    topic: "Event 1",
    image: "d", // Using the imported image correctly
    description: "Description for Article 1",
  },
  {
    topic: "Event 5",
    image: "image5.jpg",
    description: "Description for Article 5",
  },
  {
    topic: "Event 6",
    image: "image6.jpg",
    description: "Description for Article 6",
  },
  {
    topic: "Event 7",
    image: "image7.jpg",
    description: "Description for Article 7",
  },
  // Add more Events as needed
];

function EventComponent() {
  return (
    <div className="flex flex-wrap justify-center">
      {Events.map((article, index) => (
        <div
          key={index}
          className="w-96 h-auto p-4 m-4 border border-gray-300 rounded-md flex flex-col justify-between"
          style={{ maxWidth: "400px", maxHeight: "600px" }}
        >
          <h2 className="text-lg font-bold mb-2">{article.topic}</h2>
          <img
            src={article.image}
            alt={article.topic}
            className="w-full h-60 object-cover mb-2 rounded-lg"
          />
          <p className="text-sm mb-2">{article.description}</p>
          <button className="bg-[#879d62] text-black font-bold py-2 px-4 rounded">
            View Article
          </button>
        </div>
      ))}
    </div>
  );
}

function Eventpack() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // You can implement filtering of events based on category here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <br></br>
      <div className="flex justify-center mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${
            selectedCategory === "all" ? "bg-[#FDA403] text-white" : "bg-gray-200"
          }`}
          onClick={() => handleCategoryChange("category1")}
        >
          Music 
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded ${
            selectedCategory === "all" ? "bg-[#FDA403] text-white" : "bg-gray-200"
          }`}
          onClick={() => handleCategoryChange("category1")}
        >
          Sports
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "all" ? "bg-[#FDA403] text-white" : "bg-gray-200"
          }`}
          onClick={() => handleCategoryChange("category2")}
        >
         Festival
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-0">Articles</h1>
      <EventComponent />
    </div>
  );
}

export default Eventpack;