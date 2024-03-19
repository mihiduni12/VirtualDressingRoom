import React from 'react';
import BillLogo from '../../components/Bill/BillLogo';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Bill/Card';

function CardPayment() {
  return (
    <div className='Totalbill'>
      <div className='bg-[#FBE7C6]'>
      
        <BillLogo />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      {/* Rest of the content with another color */}
      <div className='bg-[#B4F8C8]'>
      <br></br>
        <br></br>
        <br></br>
        
      <Card/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* Add other components as needed */}
      </div>

  <Footer />
    </div>

);
}

export default CardPayment;
