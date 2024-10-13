/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctor' element={<Doctors/>} />
        <Route path='/doctor/:specaility' element={<Doctors/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
         <Route path='/my-appointemnts' element={<MyAppointments />} />
         <Route path='/my-profile' element={<MyProfile />} />
         <Route path='/appointment/:docId' element={<Appointment />} />


      </Routes>
    </div>
  )
}

export default App
