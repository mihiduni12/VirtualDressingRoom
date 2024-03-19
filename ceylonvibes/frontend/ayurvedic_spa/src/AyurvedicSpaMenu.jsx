import AyurvedicSpaMenuu from './assets/ayurvedic-spa-menu.png'


function AyurvedicSpaMenu(){

    return (
        <div className="spa-menu p-12 max-w-7.5xl mx-auto text-center bg-yellow-100">
            <div className="flex justify-center mb-12">
          <img src={AyurvedicSpaMenuu} alt="AyurvedicSpaMenuu" className="border border-black w-full h-64 object-cover mb-10"></img>
            <h2 className="text-4xl text-green-800 mb-8 mt-20 font-mono antialiased font-medium font-weight: 600">
              Ayurvedic SPA Menu
            </h2>
            
          </div>
    
          
          <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
             <div className="ayurvedic-spa bg-white p-6 rounded-lg shadow-md mb-8">
              <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700 line-height: 2rem">
                SAMVAHANA
              </h4>
              <p className="text-gray-700">
                Classical Ayurveda full body massages using herbal medicated oils help balance body energies. This massage is extremely beneficial in relieving body aches pains and general fatigue.
              </p>
              <p className="text-gray-700 font-weight: 800;">
                90 MINUTES LKR 17,000
              </p>
              <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-200">
                BOOK NOW
              </button>
            </div>
           </div>

           <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
           <div className="ayurvedic-spa bg-white p-6 rounded-lg shadow-md mb-8">
           <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700 line-height: 2rem">
                SHIRSHABYANGA
              </h4>
              <p className="text-gray-700">
                  Traditional Ayurvedic head, neck and shoulder massage using selected herbal oils which releives insomnia, headaches and nourishes ears, eyes and hair.
              </p>
              <p className="text-gray-700">
                15 MINUTES LKR 7,000
              </p>
              <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-200">
                BOOK NOW
              </button>
            </div>
           </div>
        


           <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
            <div className="ayurvedic-spa bg-white p-6 rounded-lg shadow-md mb-8">
              <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700 line-height: 2rem">
                UDVARTANA
              </h4>
              <p className="text-gray-700">
                This is a unique treamnet where dry herbal powders are massaged into your skin using upward movement. It is effective in reducing cellulite and reducing bodyweight by unwanted fat.
                </p>
              <p className="text-gray-700">
                60 MINUTES LKR 15,500
              </p>
              <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-200">
                BOOK NOW
              </button>
            </div>
           </div>
           



            </div>
);
}

export default AyurvedicSpaMenu