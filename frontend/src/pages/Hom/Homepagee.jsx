import React from 'react'
import HomePageBody from '../../components/Home/Home'
// import Logo from '../../components/Home/Logoooo'
import Buttons from "../../components/Header/Buttons";
import Navbar from "../../components/Header/Navbar";

export default function Homepagee() {
  return (
    <div >
        {/* <Logo /> */}
{/* <div className='bg-[#10d7f1]'>
<br /><br /><br /><br />

</div> */}
{/* <Buttons />
<Navbar /> */}
{/* <Buttons />
<Navbar /> */}
<div className="flex-col justify-center items-center">
            <div className="mt-[20px] ml-[50px] font-Spirax absolute text-[50pt]">Dress On</div>
            <div className="mt-[100px] ml-[200px] font-Natural absolute text-[25pt] text-green colo">Clothing Store</div>
            
        </div>
{/* <div className='bg-cover bg-center h-screen' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/abstract-blur-defocused-shopping-mall-deparment-store-interior_1203-9608.jpg')" }}>
</div> */}




<HomePageBody />

    </div>
    
  )
}
