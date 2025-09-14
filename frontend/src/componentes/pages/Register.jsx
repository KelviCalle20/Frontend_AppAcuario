import React, {useState}from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Register.css";
import {FaUser, FaLock, FaEnvelope} from "react-icons/fa";
const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/users/register', { nombre, email, password });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.error || 'Error en registro');
    }
  };
  return (
    <div className='wrapper'>
        <form onSubmit={handleRegister}>
            <h1>Registro</h1>
            <div className='input-box'>
                <input type="text" placeholder='Nombre' required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <FaUser className='icon'/>
            </div>

            <div className='input-box'>
                <input type="email" placeholder='Correo electronico' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FaEnvelope className='icon'/>
            </div>
            
            <div className='input-box'>
                <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icon'/>
            </div>

            <button type='submit'>Registrarse</button>
            <div className='register-link'>
                <Link to="/">Volver a login</Link>
            </div>
        </form>
    </div>
  );
}

export default Register
