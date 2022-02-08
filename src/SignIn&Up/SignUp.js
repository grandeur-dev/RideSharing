import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/plain.css'

import './SignIn.css';

function SignUp() {

    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [number, setNumber] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password_2, setPassword_2] = useState();

    function handleSubmit() {
        console.log("Sign Up Submit called");
        console.log(fName, lName, number, email, password, password_2);
    }


    return (
    <div className='SignIn'>
      <h2>Sign Up</h2>

      <form action="#">

      {/* <label>Phone Number</label> */}
      <PhoneInput className="PhoneInput" placeholder='Phone Number' country={'in'} onChange={(e) => setNumber(e)}/> <br />

      {/* <label>First Name</label> */}
      <input type="text" placeholder='First Name' onChange={(e) => setFName(e.target.value)}/> <br />
      
      {/* <label>Last Name</label> */}
      <input type="text" placeholder='Last Name' onChange={(e) => setLName(e.target.value)}/> <br />


      {/* <label>Email</label> */}
      <input type="text" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/> <br />

      {/* <label>Password</label> */}
      <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/> <br />

      {/* <label>Confirm Password</label> */}
      <input type="text" placeholder='Confirm Password' onChange={(e) => setPassword_2(e.target.value)}/><br/>

      {/* <Button variant='text' onClick={handleSubmit}>Submit</Button> */}
      <button className='SignInSection active' type='submit' onClick={handleSubmit}>Submit</button>

      </form>

      <Link to="/SignIn">
          {/* <Button variant='text'>Sign In</Button> */}
          <button className='SignInSection'>Sign In</button>
      </Link>

      
    </div>
  );
}

export default SignUp;
