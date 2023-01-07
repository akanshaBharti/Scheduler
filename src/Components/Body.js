import React, { Component } from 'react'
import img from '../Images/EDU-builds.png'
import { Paper } from '@mui/material'
 
function Body(){
    return(
        <div>
             <div className = "text-center mt-3">
                <img src = {img} className="rounded" alt="Img" width="1100" height = "600" ></img>
              <div className = "mt-4 mx-2" >
              <Paper elevation={3}>
                <fieldset>
              <legend><h4><strong>Edu-Builds</strong></h4></legend>
              <p>Edu Builds is a web application that helps its users create an optimized schedule for their daily tasks. The schedule is designed to be efficient and easy to follow, ensuring that users can get the most out of their day. To use the app, users first input their tasks and appointments into the system. They can specify the time that each task or appointment will take, as well as any deadlines or priorities. Once all of the tasks and appointments have been entered, the app uses an algorithm to create a schedule that is optimized for the user. This may involve grouping similar tasks together, scheduling high-priority tasks for the most productive times of the day, and ensuring that there is enough time for breaks and relaxation. The schedule is then presented to the user in a clear and easy-to-follow format. It can be accessed on any device, allowing users to stay organized and on track no matter where they are. Overall, Edu Builds is a valuable tool for anyone looking to improve their productivity and manage their time more effectively. Whether you are a student, a professional, or just someone with a lot of tasks on your plate, this app can help you get more done and feel more in control of your day.
              </p>
              </fieldset>
              </Paper>
              </div>
            </div>

        </div>
    )
}
export default Body