// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// // import Navbar from "react-bootstrap/Navbar";
// import { LinkContainer } from "react-router-bootstrap";
// // import { useHistory } from 'react-router-dom'
// // import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <>
      <nav className="nav">
      <ul>
        <a href="/register" className="register-title">
          Register
        </a>
        <a href="/login" className="login-title">
          Login
        </a>
      </ul>
        <ul>
          <li className="hover">
            <a href="/menu-list" className="menu-title">
              View Menu
            </a>
          </li>
          <li className="hover">
            <a href="/about" className="about-title">
              About
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
