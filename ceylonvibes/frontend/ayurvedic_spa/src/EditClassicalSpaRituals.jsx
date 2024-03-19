import React, { useState } from "react";

const EditClassicalSpaRituals = () => {
  const [services, setServices] = useState([
    { name: "RELAX AND REBALANCE", description: "Our relax and rebalance treatment begins with foot refliexology to restore your body's natural state of equilibrium by channeling energy from the reflex points of the feet. This aromatherapy massage will melt away trapped toxins and release tensions of the body followed by the customized facial to pamper your face.             150 MINUTES LKR 24,500" },
    { name: "DETOX AND REFRESH", description: "This is a full body exfoliation therapy that uses nourishing, deodorizing and fresh narikela (coconut) followed by a detoxifying mud wrap. This treatment will conclude with a warm stone massage to harness all the healing powers of the body, and warmth of natural, heated stones to release the accumilated tension from muscle tissues.           150 MINUTES LKR 25,500" },
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
        Edit Classical SPA Rituals</h4>
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

 export default EditClassicalSpaRituals