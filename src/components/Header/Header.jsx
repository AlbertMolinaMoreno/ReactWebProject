// Header.jsx
import './Header.css';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect } from 'react';

const Header = () => {
  const navegate = useNavigate()
  const [tokens,SetTokens] = useState('')

  useEffect(() => {
    const token = localStorage.getItem("token")
    SetTokens(token)
  })

  function handleClick(e) {
    if (!tokens) {
      alert('Registrate para acceder a tu menu')
      navegate('/login')
    } else {
      navegate('/CrearTablas')
    }
  }


  return (
    <div className="header">
      <div className='logo'>
        <img src="file:///home/reboot/Downloads/logo_200x200-removebg-preview.png" alt="Logo" />
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Recetas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <button type='button'  onClick={handleClick}>Crear Menu</button>
    </div>
  );
}

export default Header;
