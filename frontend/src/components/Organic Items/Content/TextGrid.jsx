import React from 'react';

const TextGrid = () => {
    return (
        <div className='absolute w-[100%] top-[675px] max-w-3xl mx-auto md:max-w-none md:max-3xl'>
            <div className='text-center w-[1200px] top-[-150px] m-auto  max-w-3xl mx-auto md:max-w-none md:max-3xl'>
                <div class="grid grid-cols-4 w-[1240px] text-[17pt] m-auto text-left mb-[10px] max-w-3xl mx-auto md:max-w-none md:max-3xl font-CantoraOne gap-[50px]">
                    <div className='pt-[55px] '>
                        <i class="fa-duotone fa-basket-shopping-simple mr-[15px] text-[19pt]" style={{ '--fa-primary-color': '#8eda83', '--fa-secondary-color': '#8eda83' }}>
                        </i>Wider variety
                    </div>
                    <div >
                        <i class="fa-duotone fa-truck-bolt mr-[15px] text-[19pt] pt-[60px]" style={{ '--fa-primary-color': '#ffd167', '--fa-secondary-color': '#ff735b', '--fa-secondary-opacity': '0.4' }}>
                        </i>More convenience
                    </div>
                    <div className='pt-[20px]'>
                    <i class="fa-duotone fa-arrows-spin fa-spin mr-[15px] text-[19pt]" style={{ '--fa-primary-color': '#660964', '--fa-secondary-color': "#660964"}}>
                        </i>More flexibility
                    </div>
                    <div className='pt-[16px]'>
                        <i class="fa-duotone fa-list-dropdown mr-[15px] text-[19pt]" style={{ '--fa-primary-color': '#350569', '--fa-secondary-color': '#350569' }}>
                        </i>More information
                    </div>
                </div>
                <div class="font-Abel grid grid-cols-4 w-[1240px] text-[15pt] m-auto text-justify max-w-3xl mx-auto md:max-w-none md:max-0  gap-[50px]">
                    <div className='border-l-[4px] mt-[3px] pr-6 pl-6 mr-9 h-[190px] pt-[6pt] rounded-[7px] bg-greenWh'>
                        You can find all kinds of organic products online, from fresh produce to snacks and beverages.
                    </div>
                    <div className='border-l-[4px] pr-6 pl-6 mr-9 mt-[2px] h-[200px] pt-[6pt] rounded-[7px] bg-greenWh'>
                        You can order your products online and have them delivered to your doorstep at your preferred time.
                    </div>
                    <div className='border-l-[4px] pr-6 pl-6 mr-9 h-[190px] mt-[-30px]  pt-[6pt] rounded-[7px] bg-greenWh'>
                        You can choose from different delivery frequencies and payment options for your online orders.
                    </div>
                    <div className='border-l-[4px] pr-6 pl-6 mr-9 mt-[-30px] h-[160px] pt-[6pt] rounded-[7px] bg-greenWh'>
                        You can learn more about the origin, quality, and certification of the products you buy online.
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TextGrid;
