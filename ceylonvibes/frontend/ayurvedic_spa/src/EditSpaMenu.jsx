import React, { useState } from "react";

const EditSpaMenu = () => {
  const [services, setServices] = useState([
    { name: "SAMVAHANA", description: "Classical Ayurveda full body massages using herbal medicated oils help balance body energies. This massage is extremely beneficial in relieving body aches pains and general fatigue.                 90 MINUTES LKR 17,000" },
    { name: "SHIRSHABYANGA", description: " Traditional Ayurvedic head, neck and shoulder massage using selected herbal oils which releives insomnia, headaches and nourishes ears, eyes and hair.                                        15 MINUTES LKR 7,000" },
    { name: "UDVARTANA", description: "This is a unique treamnet where dry herbal powders are massaged into your skin using upward movement. It is effective in reducing cellulite and reducing bodyweight by unwanted fat.                  60 MINUTES LKR 15,500" },
  ]);

  const handleAddService = (name, description) => {
    setServices([...services, { name, description }]);
  };

  const handleEditService = (index, name, description) => {
    const updatedServices = [...services];
    updatedServices[index] = { name, description };
    setServices(updatedServices);
  };

  const handleDeleteService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  return (
    <div style={{ background: "#6EE7B7", padding: "20px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div>
        <br></br>
        <br></br>
      <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700 line-height: 2rem text-center">
        Edit Ayurvedic SPA Menu</h4>
        <br></br>
        <br></br>
        <br></br>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%', backgroundColor: "#ffffff" }}>

        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid black', padding: '8px', width: '150px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input
                  value={service.name}
                  onChange={(e) =>
                    handleEditService(index, e.target.value, service.description)
                  }
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea
                  value={service.description}
                  onChange={(e) =>
                    handleEditService(index, service.name, e.target.value)
                  }
                  rows={4} 
                  style={{ width: "800px", resize: "vertical" }} 
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <button className="bg-red-500 hover:bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{ marginRight: '5px' }} onClick={() => handleDeleteService(index)}>Delete</button>
                <br></br>
                
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => console.log("Edit clicked for service ID:", service.id)} >Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleAddService("", "")}>ADD</button>
    </div>
    </div>
  );
 }

 export default EditSpaMenu