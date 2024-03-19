import React, { useState } from 'react';

const ServiceAppointment = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="bg-green-100 p-6 rounded-lg shadow-md mb-8">
      <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700 line-height: 2rem">
        SPA service Appointment
      </h4>
      <form onSubmit={handleSubmit}>
      
      
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Time
          </label>
          <div className="flex">
            <input
              type="time"
              id="time"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />

          
            <input
              type="date"
              id="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            </div>
            </div>
            <div>

            <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
             <div className="flex">
            <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
               />
             </div>
             </div>
            </form>
             <br></br>
             <br></br>
             <br></br>

            <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-200">
                BOOK NOW
              </button>
            </div>
  );
}

export default ServiceAppointment  
