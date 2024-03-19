import React from 'react';
import { Link } from 'react-router-dom';

const HomePageBody = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {/* SPA */}
      <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
        <span className="text-black text-3xl">SPA</span>
      </div>
      {/* Payment */}
      <Link to="/pay">
      <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
        <span className="text-black text-3xl">Payment</span>
      </div>
      </Link>
      {/* Articles */}
      <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
        <span className="text-black text-3xl">Articles</span>
      </div>
      {/* Tours */}
      <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
        <span className="text-black text-3xl">Tours</span>
      </div>
      {/* Transport */}
      <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
        <span className="text-black text-3xl">Transport</span>
      </div>
      {/* Shop */}
      <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
        <span className="text-black text-3xl">Shop</span>
      </div>
      {/* Events */}
      <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
        <span className="text-black text-3xl">Events</span>
      </div>
    </div>
  );
};

export default HomePageBody;
