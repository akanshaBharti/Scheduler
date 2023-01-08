import React from 'react';
import {useState} from 'react';
import '../css/Login.css'
import {Link} from 'react-router-dom'
import LoginRegister from './LoginRegister';

 const Login = () => {
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');  

    const handleSubmit =(e) =>{
        e.preventDefault();
    }; 
     
    const emailTest = (e) =>{ 
        console.log('email test', e.target.value)
        
        setEmail(e.target.value);
    }
    const passwordTest = (e) =>{  
        console.log('password test', e.target.value) 
        setPassword(e.target.value); 
    } 

    return (
        <div >
        <div className='auth-form-container '>
            <h2 ><b>Login</b></h2>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input  onChange={emailTest} type='email' id='email' />
            <label htmlFor='password'>Password</label>
            <input onChange={passwordTest} type='password' id='password' />
            <Link to='/Dashboard' className='link-btn' type='submit'>Log in</Link>
            </form>
        </div>
            
        <Link to='/Register' className='link-btn'  >Don't  have an account Register Here</Link>
        

        

        </div>
    )
}
export default Login  