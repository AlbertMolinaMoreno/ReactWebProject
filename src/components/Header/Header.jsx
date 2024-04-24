// Header.jsx
import './Header.css';

const Header = () => {
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
    </div>
  );
}

export default Header;
