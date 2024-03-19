// TotalBill.jsx
import React from 'react';

import BillLogo from '../../components/Bill/BillLogo';
import BillTopic from '../../components/Bill/BillTopic';
import Footer from '../../components/Footer/Footer';
import Bill from '../../components/Bill/TBill';

function TotalBill() {
  // Sample items array
  const items = [
    { name: 'Item 1', amount: 10 },
    { name: 'Item 2', amount: 20 },
    { name: 'Item 3', amount: 30 }
  ];

  return (
    <div className='Totalbill'>
      <div className='bg-[#FBE7C6]'>
        <BillTopic />
        <BillLogo />
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* Rest of the content with another color */}
      <div className='bg-[#acf9f5]'>
        <br />
        <br />
        <br />
        <Bill items={items} /> {/* Pass items array to Bill component */}
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <Footer />
    </div>
  );
}

export default TotalBill;
