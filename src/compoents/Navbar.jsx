
import { NavLink } from 'react-router-dom'
import logo from '../assets/assets_frontend/logo.png'
import logo2 from '../assets/assets_frontend/photowithbutton.png'

const Navbar = () => {
  return (
    <div>
    <ul className='flex p-10  items-center bg-backgroundcolour '>
   
     <img src={logo} className='h-12 w-auto'></img>
     <div className='flex mr-96 gap-28 ml-16 text-gray-500 '>
        <NavLink>
        <li className='hover:text-neutral-700 hover:underline'>Home</li>

        </NavLink>
        <NavLink>
        <li className='hover:text-neutral-700 hover:underline'>About Us</li>

        </NavLink>
        <NavLink>
        <li className='hover:text-neutral-700 hover:underline'>Contact Us</li>

        </NavLink>
        <NavLink>
        <li className='hover:text-neutral-700 hover:underline'>Sign In</li>

        </NavLink>
     </div>
      
        <button className='bg-colourblueshade ml-auto py-2 px-4 rounded-full flex-grow flex items-center  text-white font-semibold '>
        <img src={logo2} alt="Button Logo" className="w-6 h-6 mr-2" />Register Now</button>

     
       
        
    </ul>
    </div>
  )
}

export default Navbar

