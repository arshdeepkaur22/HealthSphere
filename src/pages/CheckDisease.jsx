import { useState } from "react"

const CheckDisease = () => {

const[DiseaseList, setDiseaseList]=useState([])
const[EnteredDisease, setEnteredDiease]=useState('')

const symptomEntered =(e)=>{
setEnteredDiease(e.target.value)
}

const addDisease =()=>{
if(EnteredDisease && !DiseaseList.includes(EnteredDisease)){
  setDiseaseList([...DiseaseList,EnteredDisease])
  setEnteredDiease('')
}
}

const addDiseaseButton=(symptom)=>{
  if(!DiseaseList.includes(symptom)){
    setDiseaseList([...DiseaseList,symptom])
  }
}

  return (
    <div className='p-10 m-10 mt-0 bg-white'>
      <div className="font-semibold text-3xl font-sora mb-7">Check Diease</div>
      <div className="bg-backgroundcolour p-10 rounded-3xl justify-center items-center">
        <div><input placeholder="Enter Disease" value={EnteredDisease} onChange={symptomEntered} className="w-10/12 p-3 rounded-3xl "></input>
        <button onClick={addDisease} className="bg-colourblueshade/35 text-black ml-10 p-3 mb-4 rounded-3xl w-40">Add Symptom</button>
        </div>
        <div>
        <div>
          <div className="grid grid-cols-4 gap-20 p-2">
            <button onClick={() => addDiseaseButton('Fever')} className="bg-white p-2 rounded-3xl justify-center items-center">Fever</button>
            <button onClick={() => addDiseaseButton('Cough')} className="bg-white p-2 rounded-3xl justify-center items-center">Cough</button>
            <button onClick={() => addDiseaseButton('Sore Throat')} className="bg-white p-2 rounded-3xl justify-center items-center">Sore Throat</button>
            <button onClick={() => addDiseaseButton('Headache')} className="bg-white p-2 rounded-3xl justify-center items-center">Headache</button>
          </div>

          <div className="grid grid-cols-4 gap-20 p-2">
            <button onClick={() => addDiseaseButton('Fatigue')} className="bg-white p-2 rounded-3xl justify-center items-center">Fatigue</button>
            <button onClick={() => addDiseaseButton('Runny Nose')} className="bg-white p-2 rounded-3xl justify-center items-center">Runny Nose</button>
            <button onClick={() => addDiseaseButton('Muscle Pain')} className="bg-white p-2 rounded-3xl justify-center items-center">Muscle Pain</button>
            <button onClick={() => addDiseaseButton('Shortness of Breath')} className="bg-white p-2 rounded-3xl justify-center items-center">Shortness of Breath</button>
          </div>

          <div className="grid grid-cols-4 gap-20 p-2">
            <button onClick={() => addDiseaseButton('Nausea')} className="bg-white p-2 rounded-3xl justify-center items-center">Nausea</button>
            <button onClick={() => addDiseaseButton('Chills')} className="bg-white p-2 rounded-3xl justify-center items-center">Chills</button>
            <button onClick={() => addDiseaseButton('Loss of Smell')} className="bg-white p-2 rounded-3xl justify-center items-center">Loss of Smell</button>
            <button onClick={() => addDiseaseButton('Loss of Taste')} className="bg-white p-2 rounded-3xl justify-center items-center">Loss of Taste</button>
          </div>

          <div className="grid grid-cols-4 gap-20 p-2">
            <button onClick={() => addDiseaseButton('Diarrhea')} className="bg-white p-2 rounded-3xl justify-center items-center">Diarrhea</button>
            <button onClick={() => addDiseaseButton('Vomiting')} className="bg-white p-2 rounded-3xl justify-center items-center">Vomiting</button>
            <button onClick={() => addDiseaseButton('Body Ache')} className="bg-white p-2 rounded-3xl justify-center items-center">Body Ache</button>
            <button onClick={() => addDiseaseButton('Rash')} className="bg-white p-2 rounded-3xl justify-center items-center">Rash</button>
          </div>
        </div>
          
        </div>
      </div>
      <div className="grid grid-cols-2 bg-backgroundcolour mt-10 p-10 rounded-2xl ">
        <div className="p-5 bg-white mx-4 rounded-sm shadow-sm"> 
          <div className="font-semibold font-sora">Entered Symptoms</div>
          <hr className="my-4"></hr>
          <ul>
          {DiseaseList.map((disease, index) => (
            <li key={index} className="mb-1">{disease}</li>
          ))}
        </ul>
        <hr className="my-4"></hr>
        <button className="bg-colourblueshade/35 text-black w-48  p-2 mb-4 rounded-3xl  items-center">Predict Disease</button>
        </div>

        <div className="p-5 bg-white mx-4 rounded-sm shadow-sm"> 
          <div className="font-sora text-2xl">Predicted Disease</div>
          <hr className="my-2"></hr>
          <div className="mb-4">
            <p className="text-base font-semibold">Paitent Name: </p>
            <p className="text-gray-700 text-base font-normal ">Reena</p>
          </div>
          <div className="mb-4">
            <p className="text-base font-semibold">Predicted Disease </p>
            <p className="text-gray-700 text-base font-normal">Malaria</p>
          </div>
          <div className="mb-4">
            <p className="text-base font-semibold">Confidence Score: </p>
            <p className="text-gray-700 text-base font-normal">95%</p>
          </div>
          <div>
          <hr className="my-5"></hr> 
          <button className="bg-colourblueshade/35 text-black w-48  p-2 mb-4 rounded-3xl  ">Book an Appointment</button></div>
          <div>
          <button className="bg-colourblueshade/35 text-black w-48  p-2 mb-4 rounded-3xl  ">Online Consultation</button></div>
          </div>
      </div>
    </div>
  )
}

export default CheckDisease