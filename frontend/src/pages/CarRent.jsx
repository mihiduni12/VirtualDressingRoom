import React from "react";
import Buttons from "../components/Header/Buttons";
import SearchBar from "../components/Header/SearchBar";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Cars from "../components/rental/Cars";
import LogoRentals from "../components/rental/logoRentals";

function CarRental() {
  return (
    <div className="bg-[#c7aa6d]">
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Coda&family=Fira+Sans&family=Dancing+Script&family=Kay+Pho+Du&family=Spirax&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&family=Cantora+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-light.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap"
          rel="stylesheet"
        />
      </div>
      <div className="bg-yellow h-[114px] w-[100%] fixed z-20">
        <LogoRentals />
        <Buttons />
        <SearchBar />
        <Navbar />
      </div>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <div className="flex justify-center mt-8"> {/* Centering the buttons */}
        <button className='bg-[#7b4949] font-Barlow mr-4 mt-4 rounded-md h-10 w-24 text-black text-lg'>Car</button>
        <button className='bg-[#e8b849] font-Barlow mr-4 mt-4 rounded-md h-10 w-24 text-black text-lg'>Van</button>
        <button className='bg-[#e8b849] font-Barlow mr-4 mt-4 rounded-md h-10 w-24 text-black text-lg'>Bus</button>
      </div>
      <div>
        <Cars/>
      </div>
      <Footer />
    </div>
  );
}

export default CarRental;
