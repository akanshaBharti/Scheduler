import React from 'react'
import imgS from '../Images/Schedule.png'
import Navbar from '../Components/Navbar'
import { Paper } from '@mui/material'

function Schedule(){
    return(
        <div>
            <Navbar/>
            <div className = "text-center " width="1000" height = "200">
                {/* <img src = {imgS} className="rounded" alt="Img" width="1016" height = "250" ></img> */}
                <img src={imgS} class="img-fluid" alt="..."/>
                </div>
                <div className="mt-3">
                <Paper elevation={3} className='mx-4'>
             <div className="mx-2 mt-3">
             <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Course Name</label>
  <input type="text" class="form-control"  placeholder="Course Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Course URL</label>
  <input type="text" class="form-control"  placeholder="Course URL"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Course Duration</label>
  <input type="text" class="form-control"  placeholder="Course Duration"/>
</div>
<div className="text-center">
<button class="btn btn-primary" type="submit">Submit</button>
</div>

</div>

</Paper>
</div>
        </div>
        
    )
}
export default Schedule