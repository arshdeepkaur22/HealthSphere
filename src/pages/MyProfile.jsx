
import profile from '../assets/assets_frontend/profile.jpg';

const userInfo = {
  firstName: 'Reena',
  lastName: 'Gupta',
  age: '28',
  gender: 'Female',
  language: 'English',
  height: '165 cm',
  weight: '60 kg',
  address: 'Rose Icon, Pune',
  phone: '928967697',
  email: 'Reena@example.com',
  bloodType: 'O+',
  allergies: ['Penicillin', 'Peanuts'],
  chronicConditions: ['Asthma'],
  emergencyContact: 'Shruti: +91 955514567',
  primaryPhysician: 'Dr. Maya'
};

const MyProfile = () => {
  return (
    <div className="w-full bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 bg-blue-50 flex items-center justify-center p-4">
            <img src={profile} alt="Profile" className="rounded-full w-40 h-40 object-cover shadow-md" />
          </div>
          {/* Profile Details */}
          <div className="w-full md:w-2/3 p-6 space-y-6">
            {/* Name and Info */}
            <h2 className="text-4xl font-bold text-gray-800">{`${userInfo.firstName} ${userInfo.lastName}`}</h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
              <div><span className="font-medium">Age:</span> {userInfo.age}</div>
              <div><span className="font-medium">Gender:</span> {userInfo.gender}</div>
              <div><span className="font-medium">Language:</span> {userInfo.language}</div>
              <div><span className="font-medium">Height:</span> {userInfo.height}</div>
              <div><span className="font-medium">Weight:</span> {userInfo.weight}</div>
              <div><span className="font-medium">Blood Type:</span> {userInfo.bloodType}</div>
            </div>
            
            {/* Address and Contact */}
            <div className="text-gray-700">
              <div className="mt-4"><strong>Address:</strong> {userInfo.address}</div>
              <div className="mt-2"><strong>Phone:</strong> {userInfo.phone}</div>
              <div className="mt-2"><strong>Email:</strong> {userInfo.email}</div>
            </div>

            {/* Medical Info */}
            <section className="border-t pt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Medical Information</h3>
              <div className="space-y-4 text-gray-700">
                <div><strong>Allergies:</strong> {userInfo.allergies.join(', ')}</div>
                <div><strong>Chronic Conditions:</strong> {userInfo.chronicConditions.join(', ')}</div>
                <div><strong>Emergency Contact:</strong> {userInfo.emergencyContact}</div>
                <div><strong>Primary Physician:</strong> {userInfo.primaryPhysician}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
