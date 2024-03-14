import React from 'react';
import banner from '../../../images/beauty.png'
import banner2 from '../../../images/jojoba.png'


export default function Banner() {
    return (
        <div>
            <div className='grid grid-cols-2 h-[315px] w-[1262px] text-[17pt] m-auto text-left mb-[-40px] max-w-3xl mx-auto md:max-w-none md:max-3xl font-CantoraOne gap-[350px] mt-[-40px]'>
                <div className="w-[780px] rounded-[7px] bg-[#f0f5e3]">
                    <h3 className='absolute mt-[30px] ml-[30px] text-[19pt]'>Our latest ones coming soon</h3>
                    <p className='absolute mt-[95px] ml-[30px] w-[270px] font-Abel text-[14pt] text-justify'>We carefully select and source only the finest organic products from around the world. For organic skincare or organic home essentials, you’ll find it all here</p>
                    <button className='absolute mt-[250px] ml-[30px] text-[12pt] bg-[#ecd554] p-[6px] font-Coda rounded-[5px]' >Learn More</button>
                    <img className=" w-[400px] h-[280px] rounded-[7px] float-right mt-[20px] mr-[20px]" src={banner} alt="" />
                </div>
                <div className="w-[410px] rounded-[7px] bg-[#f0f5e3]">
                    <h3 className='absolute w-[350px] mt-[30px] ml-[30px] text-left text-[19pt]'>Our New arrivals</h3>
                    <img className=" w-[80px] h-[220px] rounded-[7px] float-left mt-[80px] ml-[45px]" src={banner2} alt="" />
                    <h3 className='absolute w-[230px] mt-[82px] ml-[160px] text-[16pt] font-bold font-Coda '>Jojoba Oil</h3>
                    <div className='absolute mt-[114px] w-[350px] ml-[40px] '>
                        <p className='mt-[px] w-[250px] ml-[120px] font-Abel text-[14pt] text-left'>100% Pure Moisturizing Oil</p>
                        <p className='mt-[6px] w-[200px] ml-[120px] font-Abel text-[14pt] text-justify'>For Hair and skin in need of soothing and moisturizing care</p>
                        <button className='font-Coda absolute mt-[12px] ml-[120px] text-[12pt] bg-[#ecd554] p-[6px] rounded-[5px]' >Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}