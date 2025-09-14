import React, {useState}from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Login.css";
import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventSefault();
    try{
        const res = await axios.post('http://localhost:4000/api/users/login', { email, password });
        alert(res.data.message);
    } catch (err){
        alert(err.response?.data?.error || 'error en el login');
    }
  };
  return (
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='input-box'>
                <input type="email" placeholder='Correo electronico' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FaUser className='icon'/>
            </div>

            <div className='input-box'>
                <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icon'/>
            </div>

            <div className='remember-forgot'>
                <a href="#">olvidaste la contraseña</a>      
            </div>
            <button type='submit'>Iniciar Sesion</button>
            <div className='register-link'>
                <Link to="/register">registrarse</Link>
            </div>
        </form>
    </div>
  );
}

export default Login
