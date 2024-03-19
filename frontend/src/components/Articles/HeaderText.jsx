import React from "react";
import img1 from "../../images/Sigiriya.jpg"



export default function HeaderText() {
  return (
    <div>
      <div className="flex flex-col items-left h-screen">
        <div className="h-[200px]"></div>
        <h1 className="text-[50pt] font-CantoraOne ml-[200px]">Articles<br/> for you</h1>
        <img src={img1} alt="" className="w-[400px] h-[400px] absolute right-0 mr-[100px] mt-[160px] rounded-[22px]"/>

      </div>
    </div>
  );
}
