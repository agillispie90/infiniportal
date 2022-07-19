import React from 'react';
import { BrowserRouter, Route, Routes, useParams, useRoutes } from 'react-router-dom';
import './styles.css';
import Signup from './Signup'
import Pricing from './Pricing'
import About from './About'
import Home from './Home'
import NotFound from './NotFound'
import Login from './Login'
import Trucks from './Trucks'
import SingleTruck from './SingleTruck'
import Profile from './Profile'



function App() {
  const idNum = window.location.pathname.split('/trucks/')[1]
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="pricing" element={<Pricing/>} />
        <Route path="about" element={<About/>} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="trucks" element={<Trucks />} />
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
