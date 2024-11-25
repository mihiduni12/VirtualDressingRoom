import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Buttons from "../../components/Header/Buttons";
import Navbar from "../../components/Header/Navbar";

const HomePageBody = () => {
  return (
    <>
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/abstract-blur-defocused-shopping-mall-deparment-store-interior_1203-9608.jpg')" }}>
    <div className="flex flex-wrap justify-center items-center min-h-screen">
    
      {/* SPA */}
      {/* <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
      <span className="text-black text-3xl">SPA</span>
    </div> */}
      {/* Payment */}
      {/* <Link to="/pay"> */}
      {/* <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
      <span className="text-black text-3xl">Payment</span>
    </div> */}
      {/* </Link> */}
      {/* Articles */}
      {/* <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
      <span className="text-black text-3xl">Articles</span>
    </div> */}
      {/* Tours */}
      {/* <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
      <span className="text-black text-3xl">Tours</span>
    </div> */}
      {/* Transport */}
      <Link to="/Transport">
        <div className="w-80 h-20 bg-[#41C9E2] m-4 flex justify-center items-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <span className="text-white font-bold text-3xl tracking-wide">Get Started!</span>
        </div>

        {/* <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
          <span className="text-black text-3xl">Get started!</span>
        </div> */}
        </Link>
      {/* Shop */}
      {/* <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
      <span className="text-black text-3xl">Shop</span>
    </div> */}
      {/* Events */}
      {/* <div className="w-64 h-64 bg-[#41C9E2] m-4 flex justify-center items-center">
      <span className="text-black text-3xl">Events</span>
    </div> */}
    
    </div>
    </div>
    <Footer></Footer></>
    
  );
  
};

export default HomePageBody;
