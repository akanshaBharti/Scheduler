import React from 'react'
import banner from '../Images/banner.png'
import '../css/Dashboard.css'
import bgImage from '../Images/bgImage.png'

function dashboard() {  
  return (
    <div className='dashboard '>
      <img src={banner} class="img-fluid" alt="..."/>

      <div class="card mt-5 ml-5 mr-5 ">
  <div class="card-body ">
    <h5 class="card-title"><b>Today's Schedule</b></h5>
    <p class="card-text">...</p>
  </div>
</div>
      <div class="card mt-5 ml-5 mr-5">
  <div class="card-body">
    <h5 class="card-title"><b>Links:</b></h5>
    <p class="card-text">...</p>
  </div>
</div>
      
<img src={bgImage} class="img-fluid" alt="..."/>
<footer className='footer'>
    MADE BY UNPLUGGED AND WIRELESS
</footer>

    </div>
  )
}

export default dashboard
