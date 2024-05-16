import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram , FaGithub} from "react-icons/fa";

import "../styles/nav.css"

function Navbar () {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsivenav");
  
  }

  return (
    <>
      <header className="navHead">
        <a
          href="/Reconectar"
          className="logoContainer"
          rel="nofollow noopener"
          aria-label="Web Logo"
        >
          <img src="src/assets/Icono_opt.svg" alt="Web Logo" className="logo" />
        </a>
        <div className="navdiv" ref={navRef}>
          <div></div>
        <nav className="nav" ref={navRef}>
          <ul className="navUl">
            <li className="navLink">
              <Link to="/" className="navLink">
                Ideas
              </Link>
            </li>
            <li className="navLink">
              <Link to="/Videojuegos" className="navLink">
                Videojuegos
              </Link>
            </li>
            <li className="navLink">
              <Link to="/Eventos" className="navLink">
                Eventos
              </Link>
            </li>
          </ul>
        </nav>
        <div className="socialButtons">
          <a
            href="https://www.instagram.com/aitordsgn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Link"
            className="navLogos"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://github.com/aitordsgn/Reconectar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conexión a github del proyecto"
            className="navLogos"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://example.com" //TODO Arreglar el link de donaciones
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate"
            className="navDonate"
          >
            Donate
          </a>
        </div>
        <button className="navbton navclosebtn" onClick={showNavbar}>
          <FaTimes/>
        </button>
        </div>
        <button className="navbton" onClick={showNavbar}>
          <FaBars/>
        </button>
      </header>
    </>
  );
}

export default Navbar;