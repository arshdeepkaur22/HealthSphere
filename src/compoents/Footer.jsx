
const Footer = () => {
    return (
      <>
      <div className="bg-footerbg">
     <div className="p-6 pt-16 grid grid-cols-3  justify-center text-white ">
    <div className=" ml-16 flex flex-col ">
      <div className="font-semibold text-4xl font-sora mb-6 ">HealthSphere</div>
      <div className="font-thin italic mb-4">Jl. Lebak Bulus I Kav. 29 Cilandak <br />Jakarta Selatan, DKI Jakarta, Indonesia 12340</div>
      <div>Icons</div>
    </div>
    <div className="flex  flex-col items-center justify-items-start">
      <div className="font-sora font-medium text-2xl mb-4">Company Info</div>
      <ul>
      <li>Something</li>
      <li>Something</li>
      <li>Something</li>
      </ul>
    </div>
    <div className="flex flex-col items-center justify-items-start">
    <div className="font-sora font-medium text-2xl mb-4">Contact Us</div>
      <div>Healthsphere</div>
      <div>Healthsphere</div>
    </div>
  </div>
  
  <div className="border-t-2 border-gray-500 w-3/4 m-1 mx-auto pt-5" ></div> 
  <div className="font-extralight italic text-center text-gray-500 p-2" >healthsphere@2024</div> 
  </div>
      </>
    )
  }
  
  export default Footer
  