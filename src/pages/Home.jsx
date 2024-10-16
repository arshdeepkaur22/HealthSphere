
import doctorimg from '../assets/assets_frontend/doctor image.png'
import logo2 from '../assets/assets_frontend/photowithbutton.png'
import card1 from '../assets/assets_frontend/card1.png'

import card3 from '../assets/assets_frontend/card3.png'
import card4 from '../assets/assets_frontend/card4.png'
import whatsapp from '../assets/assets_frontend/whatsapp.png'
import hospital from '../assets/assets_frontend/hospital.jpg'
const Home = () => {
  return (
    <>
    <div className="flex p-10 bg-backgroundcolour items-center">
    <div><div className='text-6xl mb-8 font-bold text-colourblueshade'>“HealthSphere 24/7: Wellness at your fingertips!”</div>
    <div className='mx-4 font-sora text-gray-400'>Our healthcare website provides  full time support for all your medical needs,anytime you need assistance</div>
    <button className='bg-colourblueshade mx-28 my-7 py-2 px-4 rounded-full flex-grow flex items-center  text-white font-semibold '>
    <img src={logo2} alt="Button Logo" className="w-6 h-6 mr-2" />Book now</button></div>
    <img src={doctorimg}></img>
    </div>
    <div className="p-10 bg-graybg">
  <div className='p-10 mx-10'>
      <div className="grid grid-cols-3 gap-5">
      <div className="rounded-3xl p-10 bg-white">
        <img src={card4}></img>
        <div className='font-semibold text-2xl py-3 font-sora'>Drug Safety and Alerts</div>
        <div className='text-gray-400 py-3'>Stay informed about the latest drug safety updates, recalls, and guidelines to protect your health. Click here for important medication alerts and safety information.</div>
        <button className='bg-colourblueshade my-2 py-2 px-4 rounded-full flex-grow flex items-center  text-white font-semibold '>
        <img src={whatsapp} alt="Button Logo" className="w-6 h-6 mr-2" />Book now</button>
      </div>
      <div className="rounded-3xl p-10 bg-white">
        <img src={card3}></img>
        <div className='font-semibold text-2xl py-3 font-sora'>Medical Check Up</div>
        <div className='text-gray-400 py-3'>Book your medical check-up online with ease at HealthSphere. Quick, convenient, and expert care, all at your fingertips</div>
        <button className='bg-colourblueshade my-2 py-2 px-4 rounded-full flex-grow flex items-center  text-white font-semibold '>
        <img src={whatsapp} alt="Button Logo" className="w-6 h-6 mr-2" />Book now</button>
      </div>
      <div className="rounded-3xl p-10 bg-white">
        <img src={card1}></img>
        <div className='font-semibold text-2xl py-3 font-sora'>Professional Doctor</div>
        <div className='text-gray-400 py-3'>Consult with professional doctors online at HealthSphere for trusted, expert care. Convenient appointments, personalized treatment, and peace of mind</div>
        <button className='bg-colourblueshade my-2 py-2 px-4 rounded-full flex-grow flex items-center  text-white font-semibold '>
        <img src={whatsapp} alt="Button Logo" className="w-6 h-6 mr-2" />Book now</button>
        </div>
      </div>
      </div>
     
        
      
    </div>
    <div className="px-10 grid grid-cols-2 items-center bg-graybg ">
      <img src={hospital} className='ml-48 h-96 p-14'></img>
      <div>
      <div className='font-sora font-semibold text-4xl p-2'>“HealthSphere: Your hospital Connection”</div>
      <div className='font-sora text-gray-500 py-2 '>Connect with top hospitals through HealthSphere for seamless care .Your health journey starts here,anytime,anywhere!”
      </div>
      <button className='bg-colourblueshade my-6 py-2 px-6 rounded-full flex-grow flex items-center  text-white font-semibold '>
        <img src={whatsapp} alt="Button Logo" className="w-6 h-6 mr-4" />Book now</button>
        
      </div>
    </div>
    </>
  )
}

export default Home
