import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(username==="chase" && password==="voltop") {
      alert("Successful login")
    } else {
      alert("no no you fool")
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
        
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
      <button onClick={handleLogin}>Login</button>
      
    </div>
  );
}



export default Login;
