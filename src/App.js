// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import UserLogin from './Components/Login'; // Make sure the path is correct
import InstituteSignup from './Institute/InstituteSignup';
import InstituteInterface from './Institute/InstituteInterface'
import AddVehicleInfo from './Institute/VehicleInfo';
import VehicleRoute from './Institute/VehicleRoute';
import DriverMap from './Driver/DriverInterface';
import StartRouteButton from './Driver/StartRouteButton';
import SignupForm from './Students/Signup';
import StudentInterface from './Students/StudentInterface';
import StudentRoute from './Students/StudentRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register/institute" element={<InstituteSignup/>}/>
        <Route path="/register/student" element={<SignupForm/>}/>
        <Route path="/institute/interface" element={<InstituteInterface/>}/>
        <Route path="/institute/add-vehicle" element={<AddVehicleInfo/>}/>
        <Route path="/institute/add-vehicle/institution/Addroute" element={<VehicleRoute/>}/>
        <Route path="/driver/StartRoute" element={<StartRouteButton/>}/>
        <Route path="/driver/interface" element={<DriverMap/>}/>
        <Route path="/student/interface" element={<StudentInterface/>}/>
        <Route path="/student/VehicleRoute-10" element={<StudentRoute/>}/>
      </Routes>
    </Router>
  );
}

export default App;
