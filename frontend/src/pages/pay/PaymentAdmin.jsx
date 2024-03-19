// TotalBill.jsx
import React from 'react';
import ReceivedSlips from '../../components/Bill/ReceivedSlips';
import PALogo from '../../components/Bill/PALogo';

function PaymentAdmin() {
  // Sample items array
  const items = [
    { name: 'Item 1', amount: 10 },
    { name: 'Item 2', amount: 20 },
    { name: 'Item 3', amount: 30 }
  ];

  return (
    <div className='Totalbill'>
      <div className='bg-[#FBE7C6]'>
       <PALogo/>
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* Rest of the content with another color */}
      <div className='bg-[#879d62]'>
        <br />
        <br />
        <ReceivedSlips/>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

    </div>
  );
}

export default PaymentAdmin;
