import React from 'react';
import PhoneInput from "react-phone-input-2";

import 'react-phone-input-2/lib/plain.css'

import './SignIn.css'

function NumberSignIn({setUser, setPassword}) {
  return (
    <div>
      <PhoneInput className="PhoneInput" country={'in'} onChange={(e) => setUser(e)}/> <br />
      <input type="password" name="SignInPass" id="SignInPass" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/> <br />
    </div>
  );
}

export default NumberSignIn;




