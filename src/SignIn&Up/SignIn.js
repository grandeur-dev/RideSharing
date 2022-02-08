import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import EmailSignIn from './EmailSignIn';
import NumberSignIn from './NumberSignIn';

import './SignIn.css';

function Signin() {
  const [number, setNumber] = useState(1);
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function numberClick(e) {
    setNumber(1);
  }

  function emailClick(e) {
    setNumber(0);
  }

  useEffect(() =>
    {
      if (number) {
        document.getElementById('number').classList.add('active');
        document.getElementById('email').classList.remove('active');
      }
      else {
        document.getElementById('number').classList.remove('active');
        document.getElementById('email').classList.add('active');
      }
    },
    [number]
  )

  function handleSignIn() {
    console.log("Sign In called");
    console.log(user)
    console.log(password);
  }

  return (
    <div className="SignIn">
      <>
      <div className="sectionWrapper">
      
      <button id="number" className="SignInSection active" onClick={numberClick}>Using Number</button>
      
      <button id="email" className="SignInSection" onClick={emailClick}>Using Email</button>
      </div>
      

      {number ? <NumberSignIn setUser={setUser} setPassword={setPassword} /> : <EmailSignIn setUser={setUser} setPassword={setPassword} />}

      
      <button className="SignInSection active" type="submit" onClick={handleSignIn}>Sign IN</button>

      <br />
      
      <Link to='/SignUp'>
        <button className='SignInSection'>Sign Up</button>
      </Link>
      

      </>
    </div>
    
  );
}

export default Signin;
