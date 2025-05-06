import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onContactClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>

    <div>
      <div className="garis">
        <img src="/garis.png" alt="Garis" />
      </div>
    </div>
    
      <ul className="nav-links">
        <li><Link to="/gameinfo">GAME INFO</Link></li>
        <li><Link to="/achievement">ACHIEVMENTS</Link></li>
        <li><button className="contact-nav" onClick={onContactClick}>CONTACT US</button></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;