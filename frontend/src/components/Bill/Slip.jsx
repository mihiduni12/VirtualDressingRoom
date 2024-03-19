import React, { useState } from "react";
import { Link } from "react-router-dom";

const Slip = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic, such as uploading the file.
    if (file) {
      console.log("File uploaded:", file);
      // You can now upload the file to your server or perform any other necessary actions.
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold mb-2">Upload Slip</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slipFile">
                Upload Slip
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="slipFile"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                required
              />
            </div>
            <Link to="/uploaded">
     
            <button
              className="bg-[#44d658] text-Black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Upload
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
8
export default Slip;
