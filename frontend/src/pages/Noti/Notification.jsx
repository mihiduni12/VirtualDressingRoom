// TotalBill.jsx
import React from 'react';
import NotiLogo from '../../components/Notifications/NotificationsLogo';
import Footer from '../../components/Footer/Footer';
import Notifications from '../../components/Notifications/notification';
import NotifiTopic from '../../components/Notifications/NotifiTopic';

function Notification() {
  return (
    <div className='Totalbill'>
      <div className='bg-[#f2626b]'>
        <NotiLogo />
      <NotifiTopic />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className='bg-[#adf19b]'>
   
        <br></br>
        <br></br>
        <Notifications/>
        <br></br>
        <br></br>
      </div>

  <Footer />
    </div>

);
}

export default Notification;
