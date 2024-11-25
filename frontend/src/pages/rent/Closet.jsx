import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Make sure to install this package
import Buttons from "../../components/Header/Buttons";
import VirtualSearch from "./VirtualSearch"; // Import the VirtualSearch component
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import LogoRentals from "../../components/rental/logoRentals";

const Vcloset = () => {
  const [storedData, setStoredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  useEffect(() => {
    const fetchStoredData = () => {
      const data = JSON.parse(localStorage.getItem("formData")) || [];
      setStoredData(data);
    };
    fetchStoredData();
  }, []);

  const handleDelete = (index) => {
    const updatedData = storedData.filter((_, i) => i !== index);
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setStoredData(updatedData);

    // Display success alert after deleting the item
    window.alert("Outfit deleted successfully!");
  };

  const generateReport = () => {
    const doc = new jsPDF();

    // Set the font size for the title and center it
    doc.setFontSize(20);

    // Get the page width and calculate the position to center the title
    const pageWidth = doc.internal.pageSize.getWidth();
    const titleText = "Virtual Closet Report";
    const titleWidth = doc.getTextWidth(titleText);
    const titleX = (pageWidth - titleWidth) / 2; // Center the title

    // Add the title to the document
    doc.text(titleText, titleX, 20); // The title will be at y = 20

    // Group by occasion and count items
    doc.setFontSize(16); // Set font size for the next section
    doc.text("No of Outfits by Occasion", 14, 30);

    const occasionCount = {};
    const occasionColorCount = {};

    storedData.forEach((item) => {
      // Count items by occasion
      occasionCount[item.occasion] = (occasionCount[item.occasion] || 0) + 1;

      // Group colors by occasion
      if (!occasionColorCount[item.occasion]) {
        occasionColorCount[item.occasion] = {};
      }
      occasionColorCount[item.occasion][item.color] =
        (occasionColorCount[item.occasion][item.color] || 0) + 1;
    });

    // Create table for occasions
    const occasionTableRows = Object.entries(occasionCount).map(
      ([occasion, count]) => [occasion, count]
    );

    // Create table for most common colors by occasion
    const occasionColorTableRows = Object.entries(occasionColorCount).map(
      ([occasion, colors]) => {
        const mostCommonColor = Object.entries(colors).reduce(
          (prev, curr) => (curr[1] > prev[1] ? curr : prev),
          ["", 0]
        );
        return [occasion, mostCommonColor[0]]; // Only include occasion and most common color
      }
    );

    // Add occasion counts to the PDF with a border
    doc.autoTable({
      head: [["Occasion", "Count"]],
      body: occasionTableRows,
      startY: 40, // Start the table below the title
      styles: {
        fillColor: [0, 135, 255], // Light blue background for header
        textColor: [0, 0, 0], // Black text
        lineColor: [0, 0, 0], // Black line color
        lineWidth: 0.1, // Line width
        fontSize: 12,
      },
      headStyles: { fontSize: 12 },
      bodyStyles: { fillColor: [255, 255, 255], fontSize: 11 }, // White for body
      margin: { top: 10 },
      theme: "grid", // Add grid border
    });

    // Add section for most common colors by occasion
    doc.text(
      "Most Common Colors by Occasion",
      14,
      doc.autoTable.previous.finalY + 10
    );
    doc.autoTable({
      head: [["Occasion", "Most Common Color"]],
      body: occasionColorTableRows,
      startY: doc.autoTable.previous.finalY + 15,
      styles: {
        fillColor: [100, 149, 237], // Light blue background for header
        textColor: [0, 0, 0], // Black text
        lineColor: [0, 0, 0], // Black line color
        lineWidth: 0.1, // Line width
        fontSize: 12,
      },
      headStyles: { fontSize: 12 },
      bodyStyles: { fillColor: [255, 255, 255], fontSize: 11 }, // White for body
      margin: { top: 10 },
      theme: "grid", // Add grid border
    });

    // Draw a border around the entire report
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20); // Draw border

    // Save the PDF
    doc.save("closet_report.pdf");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the storedData based on the search term
  const filteredData = storedData.filter((item) =>
    item.color.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#ccdae2] min-h-screen">
      {/* Header Section */}
      <header className="bg-yellow h-[114px] w-full fixed top-0 z-20">
        <LogoRentals />
        <Buttons />
        <VirtualSearch searchTerm={searchTerm} handleSearch={handleSearch} />
        <Navbar />
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-[114px]">
        {" "}
        {/* Adjust margin-top to match header height */}
        <h1 className="text-center text-3xl font-bold mt-8">Virtual Closet</h1>

        <br></br>

        <button
          onClick={generateReport}
          className="bg-[#2e7aa6] text-white p-3 rounded-md hover:bg-[#FF8C00] text-lg"
        >
          Generate the Closet Report
        </button>

        <br></br>
        <br></br>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map((data, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={data.imageUrl}
                  alt="Item"
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h2 className="font-bold">{data.name}</h2>
                <p>Color: {data.color}</p>
                <p>Occasion: {data.occasion}</p>
                <p>Note: {data.note}</p>
                <div className="flex space-x-2">
                  <Link
                    to="/Vform"
                    state={{ data, index }} // Pass data and index to the form page
                  >
                    <button className="bg-[#2e7aa6] text-white p-3 rounded-md hover:bg-[#FF8C00] text-lg">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-[#2e7aa6] text-white p-3 rounded-md hover:bg-[#FF8C00] text-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No items in your closet.</p>
        )}
      </div>
      <br></br>
      <br></br>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Vcloset;
