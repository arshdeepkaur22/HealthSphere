
const Footer = () => {
    return (
      <>
      <div className="bg-footerbg">
     <div className="p-6 pt-16 grid grid-cols-3  justify-center text-white ">
    <div className=" ml-16 flex flex-col ">
      <div className="font-semibold text-4xl font-sora mb-6 ">HealthSphere</div>
      <div className="font-thin italic mb-4">HealthSphere, Inc. 123 Wellness Way, Mumbai India</div>
      <div>Icons</div>
    </div>
    <div className="flex flex-col items-center justify-items-start">
      <div className="font-sora font-medium text-2xl ml-0 mb-4">Company Info</div>
      <ul>
      <li>Doctors</li>
      <li>Specialities</li>
      <li>Terms and Conditions</li>
      <li>About us</li>
      </ul>
    </div>
    <div className="flex flex-col items-center justify-items-start">
    <div className="font-sora font-medium text-2xl mb-4">Get in touch with us</div>
    <ul>
      <li>+626564465455</li>
      <li>contact@healthsphere.com</li>
      </ul>
    </div>
  </div>
  
  <div className="border-t-2 border-gray-500 w-3/4 mx-auto pt-2" ></div> 
  <div className="font-extralight italic text-center text-gray-500 py-5" >healthsphere@2024</div> 
  </div>
      </>
    )
  }
  
  export default Footer
  