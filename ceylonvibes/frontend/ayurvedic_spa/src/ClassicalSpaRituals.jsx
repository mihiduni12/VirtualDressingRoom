import ClassicalSpaRitualss from './assets/classical-spa-rituals.png'


function ClassicalSpaRituals(){

    return (
        <div className="spa-menu p-12 max-w-7.5xl mx-auto text-center bg-yellow-100">
            <div className="flex justify-center mb-12">
          <img src={ClassicalSpaRitualss} alt="ClassicalSpaRitualss" className="border border-black w-full h-64 object-cover mb-10"></img>
            <h2 className="text-4xl text-green-800 mb-8 mt-20 font-mono antialiased font-medium font-weight: 600">
              Classical SPA Rituals 
            </h2>
            
          </div>
    
          
          <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
             <div className="ayurvedic-spa bg-white p-6 rounded-lg shadow-md mb-8">
              <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700 line-height: 2rem">
                RELAX AND REBALANCE
              </h4>
              <p className="text-gray-700">
                Our relax and rebalance treatment begins with foot refliexology to restore your body's natural state of equilibrium by channeling "qi" energy from the reflex points of the feet. This aromatherapy massage will melt away trapped toxins and release tensions of the body followed by the customized facial to pamper your face.</p>
              <p className="text-gray-700 font-weight: 800;">
                150 MINUTES LKR 24,500
              </p>
              <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-200">
                BOOK NOW
              </button>
            </div>
           </div>

           <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
           <div className="ayurvedic-spa bg-white p-6 rounded-lg shadow-md mb-8">
           <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700 line-height: 2rem">
                DETOX AND REFRESH 
              </h4>
              <p className="text-gray-700">
                 This is a full body exfoliation therapy that uses nourishing, deodorizing and fresh narikela (coconut) followed by a detoxifying mud wrap. This treatment will conclude with a warm stone massage to harness all the healing powers of the body, and warmth of natural, heated stones to release the accumilated tension from muscle tissues.
              </p>
              <p className="text-gray-700">
                150 MINUTES LKR 25,500
              </p>
              <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-200">
                BOOK NOW
              </button>
            </div>
           </div>
            </div>
);
}

export default ClassicalSpaRituals