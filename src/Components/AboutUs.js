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
               <p>The Application is made by a team of 4 developers namely Rakshit (Full Stack), Vivek(Back End), Akansha(Front End), Shreyas(Front End).
                The Application delivers personalized schedule for its members to optmizise their time.<br/>
                Contact Us : 000999123<br/>
                Email : edubuilds@gmail.com
               </p>
            </Paper>
            </div>

        </div>
    )
}
export default AboutUs;