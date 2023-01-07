import React,{useState} from 'react'
import '../css/Profile.css'
import profileImage from '../Images/profileImage.png'
import profileB from '../Images/profileB.png'
//import ProfileD from './profileD'

function Profile() {  
    const [name,setName]=useState('Name');
    const [email,setEmail]=useState('Email');

  return (  
    <div className='profilecard'>
        <img src={profileB} class="img-fluid " alt="..."/>
    <div className='card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src={profileImage} alt='...' height="100px" width="100px"/>
            </div>
        </div>
        <div className='lower-container'>
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
      
    </div>
    {/* <Profile name={name} email={email}/> */}
    </div>
  )
}

export default Profile
