import React, { Component } from 'react'
import { Paper } from '@mui/material';

function AboutUs(){
    return(
        <div>
            <div className="mt-3 mx-2">
            <Paper elevation={3} >
                <div className='text-center'>
                <h3>About Us</h3>
                </div>
               <p>The Application delivers personalized schedule for its members to optmizise their time.<br/>
                Contact Us : xxxxxxx231<br/>
                Email : xyz@gmail.com
               </p>
            </Paper>
            </div>

        </div>
    )
}
export default AboutUs;