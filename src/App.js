import './App.css';
import {useState} from 'react';
import Schedule from './Components/Schedule';
import Home from './Home';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Navbar from './Components/Navbar'
import Register from './Components/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
   {/* <div className="app app-dark bg-primary"> */}
   <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
    <Route path = '/schedule' element={<Schedule/>}/>
    <Route path = '/login' element={<Login/>}/>
    <Route path = '/profile' element={<Profile/>}/>
    <Route path = '/dashboard' element={<Dashboard/>}/>
    <Route path = '/register' element={<Register/>}/>

    </Routes>
    </BrowserRouter>
  </div>
  
  </div>
  )
}

export default App;
  