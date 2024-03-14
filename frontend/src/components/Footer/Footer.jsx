import React from 'react';
import { Button, Input, Space } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div>
            <StyleProvider hashPriority="high">
                <div className='h-[350px] bg-[#000] grid grid-cols-3 grid-rows-3 grid-flow-col border '>
                    <div className=" mt-[25px] ml-[10px] h-[280px] pt-[20px] bg-[#000000] text-center row-span-3 text-[#fff] w-[400px] ">
                        <div className='border-[2px] w-[3px] h-[300px] mt-[-20px] ml-[402px] rounded-[6px] absolute'></div>
                        <div className=" font-Spirax text-[33pt] pl-[10px]">CeylonVibes
                            <i class="fa-sharp fa-thin fa-copyright text-[6px] ml-[4px]" style={{ color: '#ffffff' }}></i>
                        </div>
                        <div className='font-BadScript mt-[4px] text-[16px] w-[290px] text-justify mx-[auto]'>Discover Sri Lanka, a land of cultural richness and vibrancy, where you can experience its diverse heritage, traditions, arts, cuisine, and natural wonders
                        </div>
                        <div className="mt-[20px] pd font-Barlow ">
                            <button> GIVE TO CEYLON-VIBES<i class="fa-duotone fa-arrow-right" style={{ "--fa-primary-color": "#a0f1ac", "--fa-secondary-color": "#a0f1ac" }}></i>
                            </button>
                        </div>
                        <div className='text-[8pt]'>
                            <i class="fa-sharp fa-thin fa-copyright text-[10px] mr-[2px] mt-[40px]" style={{ color: '#ffffff' }}></i> 2023 CeylonVibes, Inc
                        </div>
                    </div>
                    <div className=" ml-[-34px] w-[920px] bg-[#000000] col-span-3 text-center font-Barlow text-[12pt]">
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>Contact Us</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>About Us</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>Articles</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>Organic Shop</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>Spa</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px]'>Library</button>
                    </div>

                    <div className="bg-[#000000] row-span-2 ">
                        <div className='text-[14pt] ml-[20px] mt-[-15px] text-white font-Barlow'>
                            <i class="fa-sharp fa-light fa-phone-arrow-up-right mb-[10px]" style={{ color: "#f7c973" }}></i>
                            <span>076 217 4400</span><br />
                            <i class="fa-light fa-envelope mb-[12px]" style={{ color: "#f7c973" }}></i><span>ceylonvibes@gmail.com</span><br />
                            <i class="fa-light fa-location-check text-[15pt] ml-[2px]" style={{ color: "#f7c973" }}></i><span className=' ml-[18px] text-[14pt]'>WTC East Tower, Colombo</span><br />
                            <div className='mt-[85px] ml-[60px]'>
                                <button className='text-[14pt] mr-[20px] w-[30px] h-[30px] bg-[#3d3d3d] rounded-[14px]'><i class="fa-brands fa-twitter" style={{ color: "#ffffff" }}></i></button>
                                <button className='text-[14pt] mr-[20px] w-[30px] h-[30px] bg-[#3d3d3d] rounded-[14px]'><i class="fa-brands fa-linkedin" style={{ color: "#ffffff" }}></i></button>
                                <button className='text-[14pt] mr-[20px] w-[30px] h-[30px] bg-[#3d3d3d] rounded-[14px]'><i class="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i></button>
                                <button className='text-[14pt] mr-[20px] w-[30px] h-[30px] bg-[#3d3d3d] rounded-[14px]'><i class="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i></button>
                                <button className='text-[14pt] mr-[20px] w-[30px] h-[30px] bg-[#3d3d3d] rounded-[14px]'><i class="fa-brands fa-youtube" style={{ color: "#ffffff" }}></i></button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[rgb(0,0,0)]  w-[100%] h-[200%] mt-[0px] ml-[-20px]'>
                        <div className=' p-[40px] pt-[25px] p text-center m-auto w-[420px] h-[195px] border border-[#fff] rounded-[4px]'>
                            <div className='text-[#fff] text-left font-Barlow'>
                                <p>Get the freshest CEYLON-VIBES News</p>
                            </div>
                            <Space className='pt-[15px]' direction="vertical" size="middle">
                                <Space.Compact className='' style={{ width: '100%' }}>
                                    <Input placeholder="Your email here" className='rounded-[0px] w-[240px] h-[40px] text-[12pt] font-Barlow' />
                                    <Button className='pl-[0px] bg-BrownLi2 text-[#000] rounded-[0px] h-[40px] text-[12pt] font-Barlow' type="primary">Subscribe</Button>
                                </Space.Compact>
                            </Space>
                            <div className='text-white font-Barlow flex mt-[10px]'>
                                <input type="checkbox" className='text-[9pt]' /> <div className='text-left text-[10pt] mt-[17px] ml-[15px]'>By checking this box, you agree that you are at <br />least 18 years of age.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyleProvider>
        </div>

    );
}

export default Footer;
