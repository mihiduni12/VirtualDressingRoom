import React from 'react';

function ButtonV() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="h-[400px]"></div>
      <button className="bg-[#000]  w-[300px] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
        View Articles
      </button>
    </div>
  );
}

export default ButtonV;
