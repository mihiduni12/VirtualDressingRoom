import React from 'react';

function Cator() {
  return (
    <div>
   
      <div className="bg-[#c3ce33] border border-gray-400 p-4 rounded mb-[120px] text-center m-auto mt-[140px] w-[400px] h-[250px]">
        <button className="bg-[#000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
          Attraction and Landmarks
        </button><br/>
        <button className="bg-[#000] hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
          Natural Wonders
        </button><br/>
        <button className="bg-[#000] hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2">
          Cultural Expirence
        </button><br/>
        <button className="bg-[#000] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Forests
        </button>
      </div>
    </div>
  );
}

export default Cator;
