import React, { useState } from 'react'

const Main = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setconfirmPassword] = useState('');

const handleClick =(e)=>{
  // e.preventDefault();
  if(password!== confirmPassword){
    alert('password does not match');
  } else if(password.length < 6){
    alert('enter a valid password');
  } else{
    alert('form submitted successfully');
    setEmail('');
    setPassword('')
    setconfirmPassword('')
  }
}


  return (
    <div className="main">
      <form>
        <label id="email-label">Email:</label>
        <input
          id="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if((e.target.value).includes('@')){
              e.target.className = "green";
            } else{
              e.target.className = "red";
            }
          }}
        />

        <label id="password-label">Password:</label>
        <input
          id="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if(e.target.value.length >= 6){
              e.target.className = "green";
            } else{
              e.target.className = "red";
            }
          }}
        />

        <label id="">Confirm Password:</label>
        <input
          id="confirm-pass-label"
          placeholder="Enter your confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setconfirmPassword(e.target.value);
            console.log(password);
            console.log(confirmPassword);
            if(password.length==confirmPassword.length + 1){
              e.target.className = "green";
            } else{
              e.target.className = "red";
            }
          }}
        />
        <button onClick={handleClick} id="btn">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Main;