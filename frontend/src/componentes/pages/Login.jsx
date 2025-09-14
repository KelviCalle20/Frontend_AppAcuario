import React from 'react'
import "./Login.css";
import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
const Login = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="email" placeholder='Correo electronico' required/>
                <FaUser className='icon'/>
            </div>

            <div className='input-box'>
                <input type="password" placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>

            <div className='remember-forgot'>
                <a href="#">olvidaste la contraseña</a>      
            </div>
            <button type='submit'>Iniciar Sesion</button>
            <div className='register-link'>
                <a href="#"> registrarse</a>
            </div>
        </form>
    </div>
  );
}

export default Login
