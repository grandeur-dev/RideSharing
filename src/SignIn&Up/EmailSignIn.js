import React from 'react';

import './SignIn.css'

function EmailSignIn({setUser, setPassword}) {
  return (
    <div>
      <input type="email" name="SignInMail" id="SignInMail"  placeholder='Email' onChange={(e) => setUser(e.target.value)} /> <br />
      <input type="password" name="SignInPass" id="SignInPass" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> <br />
    </div>
  );
}

export default EmailSignIn;
