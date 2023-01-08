import React from 'react';
import '../css/Login.css'
import {useState} from 'react';
import {Link} from 'react-router-dom'
import LoginRegister from './LoginRegister';

const Register = (props) => {
    const [name,setName] = useState ('');
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
    
    const handleSubmit =(e) =>{
        e.preventDefault();  
    }

    const emailTest = (e) =>{
        console.log('email test', e.target.value)
        
        setEmail(e.target.value);
    }
    const passwordTest = (e) =>{
        console.log('password test', e.target.value)
        setPassword(e.target.value);
    }
    const nameTest = (e) =>{
        console.log('name test',e.target.value)
        setName(e.target.value)
    }
    return (  
        <div>
        
            <div className='auth-form-container '>
                <h2><b>Register</b></h2>
            <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input onChange={nameTest} type='text' id='name' />
            <label htmlFor='email'>Email</label>
            <input onChange={emailTest} type='email' id='email' />
            <label htmlFor='password'>Password</label>
            <input onChange={passwordTest} type='password' id='password' />
            <Link to='/Dashboard' className='link-btn' type='submit'>Log in</Link>
            </form>
            </div> 
        <Link to='/Login' className='link-btn'>Already have an account Login here</Link>
        </div>
    )
}
export default Register