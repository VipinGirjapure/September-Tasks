import React from 'react';
import "./form.css";

function Form() {
  return (
    <>
     <div class="form_body">

        <div className="quote">
         <div className="quote_para">
            <p>Practice makes perfect. Improve your skills easily.  </p>
         </div>
        </div>
   
    <div class="inputfields">
       <div className="from_heading">
        <p>Apply now</p>
       </div>
      <div class="input">
        <input type="text" placeholder='Name' />
      </div>

      <div class="input"> 
        <input type="text" placeholder='Email'/>
      </div>

      <div class="input inputMessage">
        <input type="text" placeholder='Phone number' />
      </div>

      <div class="button_boxContact">
        <button class="btnContact">Get it now</button>
      </div>

    </div>

</div>
    </> 
  )
}

export default Form