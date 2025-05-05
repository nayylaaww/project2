import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" />
        </div> 

        <div className="garis">
          <img src="/garis.png" alt="Garis"/>
        </div>

<ul className="nav-links">
  <li><a href="/gameinfo">GAME INFO</a></li>
  <li><a href="/achievement">ACHIEVMENTS</a></li>
  <li><a href="/contact">CONTACT US</a></li>
  <li><a href="/login">LOGIN</a></li>
</ul>
      </nav>
    )
  }
  
  export default Navbar