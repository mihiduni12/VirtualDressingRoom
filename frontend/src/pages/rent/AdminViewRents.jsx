import React, { useState, useEffect } from "react";
import axios from "axios";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";


const AdminRentList = () => {
  const [rents1, setRents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/rents");
        if (!response.ok) {
          throw new Error("Failed to fetch rent data");
        }
        const responseData = await response.json();
        setRents(responseData.rents);
        console.log(responseData.rents)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rent data:", error);
      }
    };

    fetchRents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/rents/${id}`);
      setRents((prevRents) => prevRents.filter((rent) => rent._id !== id));
    } catch (error) {
      console.error("Error deleting rent:", error);
    }
  };

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-5 ">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold mb-4 text-center">Rent List</h2>
        
      </div>
      
      <PDFDownloadLink className='ml-[1200px] mt-[-40px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={rents1} />} fileName="Report-category_table.pdf">
                                    {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Preparing...</button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
                                </PDFDownloadLink>
      <table className="min-w-full rounded-xl overflow-hidden">
        <thead className="bg-yellowDr">
          <tr>
            <th className="border px-4 py-2 text-left">RentID</th>
            <th className="border px-4 py-2 text-left">UserID</th>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Start Time</th>
            <th className="border px-4 py-2 text-left">End Time</th>
            <th className="border px-4 py-2 text-left">Price</th>
            <th className="border px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="">
          {rents1.map((rent) => (
            <tr key={rent._id} className="bg-white hover:bg-yellow">
              
              <td className="border px-4 py-2 ">{rent._id}</td>
              <td className="border px-4 py-2 ">{rent.User_ID}</td>
              <td className="border px-4 py-2 ">{rent.date}</td>
              <td className="border px-4 py-2 ">{rent.starttime}</td>
              <td className="border px-4 py-2 ">{rent.endtime}</td>
              <td className="border px-4 py-2 ">${rent.price}</td>
              <td className="border px-4 py-2 ">{rent.status}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRentList;
