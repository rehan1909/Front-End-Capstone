import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About</Link>
      <Link to="/booking" className="nav-item">Booking</Link>
    </nav>
  );
}

export default Nav;