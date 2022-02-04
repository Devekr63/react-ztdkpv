import React, {useState} from "react";
import validate from './utils/validation';
import "./style.css";

export default function App() {
  const[email, handleEmail] = useState(null);
  const[name, handleName] = useState(null);
  const[password, handlePass] = useState(null);
  const[error, errorHandle] = useState(null);

  function clickHandler(){
    errorHandle(validate({email, name, password}));
  }

  return (
    <div>
      <label for="name">Name</label>
      <input id="name" onChange={(event) => handleName(event.target.value)}></input>
      <p ></p>
      <label for="email">Email</label>
      <input id="email" onChange={(event) => handleEmail(event.target.value)}></input>
      <p></p>
      <label for="password">Password</label>
      <input id="password" onChange={(event) => handlePass(event.target.value)}></input>
      <p></p>
      <checkbox id='consent'/>
      <button onClick={() => clickHandler()}>Sign Up</button>
    </div>
  );
}
