import AyurvedicSpaMenu from './assets/ayurvedic-spa-menu.png'
import ClassicalSpaRituals from './assets/classical-spa-rituals.png'
import HomePage from './assets/homepage.png'

function Treatments(){
return(
  <div className="spa-menu p-12 max-w-7.5xl mx-auto text-center bg-yellow-100"> 
  <div className="flex justify-center mb-12">
  <h2 className="text-4xl text-green-800 mb-8 mt-20 font-mono antialiased font-medium">
    Harmony through Nature, Wellness for All</h2>
  <img src={HomePage} alt="HomePage" className="border border-black w-full h-64 object-cover mb-10"></img>
  </div>


  <h3 className="text-2xl text-gray-800 mb-12 line-height: 2rem">
    Browse through the menu of our Ceylon Vibes SPA in Kandy to discover the treatment that best suits you</h3>
  <div className="flex justify-center spa-categories grid grid-cols-1 gap-8"></div>


  <div className="treatments mb-12">
    <h4 className="text-3xl text-gray-800 mb-10 font-weight: 700 font-mono antialiased line-height: 2rem">
      Treatments</h4>
    <p className="text-gray-700">
      Cocooned in calmness and combining innovative wellness rituals with traditional healing, experience a sense of true bliss at our spa hotel.</p>
  </div>


  <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
  <div className="ayurvedic-spa bg-white p-6 rounded-lg shadow-md mb-8"> 
         <img src={AyurvedicSpaMenu} alt="Ayurvedic-spa-menu" className="w-full h-64 object-cover mb-4"></img>
        <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700">AYURVEDIC SPA MENU</h4>
        <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-200">View for More</button>
      </div>
      </div>

      <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
      <div className="classical-spa-rituals bg-white p-6 rounded-lg shadow-md mb-8">
      <img src={ClassicalSpaRituals} alt="classical-spa-rituals" className="w-full h-64 object-cover mb-4"></img>  
        <h4  className="text-3xl font-mono antialiased text-gray-800 mb-2">CLASSICAL SPA RITUALS</h4>
        <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-200"> View for More</button>
      </div>
      </div>
    </div>
   
);

}

export default Treatments 