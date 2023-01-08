import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Body from './Components/Body'
import AboutUs from './Components/AboutUs';

function Home(){
    return(
    <div>
        <Navbar/>
        <Body/>
        <AboutUs/>
        </div>
    )

}

export default Home;