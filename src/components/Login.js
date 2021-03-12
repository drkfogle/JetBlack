import React, {useState} from 'react'
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import {auth} from '../firebase';
import './Login.css'


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = e => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if (auth){
        history.push('/')
      }
    })
    .catch(err => alert(err.message))
  }

  const register = e => {
    e.preventDefault();
    
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if (auth){
        history.push('/')
      }
    })
    .catch(err => alert(err.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="https://ih1.redbubble.net/image.1327583984.2245/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" alt=""/>
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value = {email} onChange={ e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value= {password} onChange={ e => setPassword(e.target.value)} />
          <button type="submit" className="login-signin" onClick={signIn}>Sign In</button>
        </form>

        <p>
          By Signing In you agree to the Terms & Conditions set by JetBlack. For any information please see our privacy notice.
        </p>

        <button type="submit" className="login-create" onClick={register}>Create Account</button>

      </div>
    </div>
  )
}

export default Login
