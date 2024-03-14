import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const CarouselAnimation = ({ offers, fetchOffers }) => {
    useEffect(() => {
        fetchOffers()
    }, [])

    return (
        <div>
            <div className='w-[100%] max-w-[1170px] mx-auto space-y-4 py-6 text-center  rounded-[11px] px-[20px] mb-[60px]'>
                <h2 className='text-center text-[36pt] font-Protest mb-[60px] text-[#000000] tracking-wide'>Special Offers</h2>
                <Swiper navigation={true} modules={[Autoplay, Pagination]} autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }} className="mySwiper" breakpoints={{
                    550: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1080: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    2024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}>
                    {offers?.length
                        ?
                        offers.map((offers) => (
                            <SwiperSlide >

                                <div className='border-[2px] rounded-[12px] bg-[#ebedec]  border-[#5d7361] h-[440px] w-[255px] mb-4 overflow-hidden group transition '>
                                    {/* <Link to='/shopInside' > */}
                                    <div className="w-full h-full">
                                        <div className="w-[180px] mx-auto h-[330px] flex justify-center items-center ">
                                            <img className="max-h-[270px] group-hover:scale-110 transition duration-300" src={'http://localhost:5010/offers/' + offers.image} alt="" />
                                        </div>
                                        <div className="bg-white rounded-[7px] mt-[-5px] text-[15pt] font-Barlow font-bold text-left pl-[20px] h-[110px]">
                                            <div href="#" className="pt-[5px] mb-[3px]">{offers.name}</div>
                                            <div className='font-normal'>From <div className='font-bold ml-[0px]'>Rs: {offers.price}<strike className='ml-[8px] font-normal'>{offers.discPrice}</strike>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </Link> */}

                            </SwiperSlide>

                        )) :
                        <td className="border px-4 py-2 text-center" rowSpan={10} colSpan={10}>No Data Found</td>
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default CarouselAnimation;
