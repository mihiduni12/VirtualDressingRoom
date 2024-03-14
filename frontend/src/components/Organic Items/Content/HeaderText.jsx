import React from 'react';
import FoodPic from '../../../images/food4.png'

const HeaderText = () => {
    return (
        <div >
            <iframe style={{display: 'none'}} src="https://www.youtube.com/embed/tSc8WROtNfc?si=8k-XkJNC-b8DRTtn&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
            <div className="font-CantoraOne ml-[13.5%] mt-[150pt] text-7xl absolute text-green z-21">
                Embark on <br />the path <br />to wellness
                <div className="font-Abel text-2xl mt-[45px]">
                    Eat Clean, Live Green, and Feel Amazing
                </div>
                <div className='absolute w-[700px] right-[-205%] top-[-70px] '>
                    <img src={FoodPic} className='h-[430px]' alt="" />
                </div>
            </div>

        </div>
    );
}


export default HeaderText;
