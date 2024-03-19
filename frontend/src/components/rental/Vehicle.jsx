import React from "react";
import img1 from "../../images/benz.jpg"
import TimeSelector from "./TimeSelector";



export default function HeaderText() {
  return (
    <div>
      <div className="flex flex-row items-left h-screen mt-48">
        {/* <div className="h-[120px]"></div> */}
        <div className="ml-72">
        <h1 className="text-[40pt] font-CantoraOne"> Mercedez Benz</h1>
        <h2 className="text-[20pt] font-Times New Roman "> Mercedez Benz Rs.1500 Rent per hour/-</h2>
        <h3 className="text-[20pt] font-Times New Roman">Fuel type:Petrol<br/> Max Persons:5</h3>
        <br></br>
        <br></br>
        <br></br>
        <TimeSelector />
        <br></br>
        <br></br>
        </div>
        <img src={img1} alt="" className="w-[500px] h-[400px] absolute right-0 mr-[150px] mt-[120px] rounded-[22px]"/>

      </div>
    </div>
  );
}