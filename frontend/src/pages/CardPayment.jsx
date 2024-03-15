import React from 'react';
import Logo from '../components/Header/logo';
import Bill from '../components/Bill/bill';
import BillLogo from '../components/Bill/BillLogo';
import BillTopic from '../components/Bill/BillTopic';
import Footer from '../components/Footer/Footer';
import UploadSlip from '../components/Bill/UploadSlip';
import CardPayment from '../components/Bill/Card';

function TotalBill() {
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
        
      <CardPayment/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
