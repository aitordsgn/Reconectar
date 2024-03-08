import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import "./nav.css"

function Navbar () {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsivenav");
  
  }

  return (
    <>
      <header className="navHead">
        <a
          href="/"
          className="logoContainer"
          rel="nofollow noopener"
          aria-label="Web Logo"
        >
          <img src="./Icono_opt.svg" alt="Web Logo" className="logo" />
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
            href="https://twitter.com/reyortegaitor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="navLogos"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a
            href="https://github.com/aitordsgn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="navLogos"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://github.com/aitordsgn"
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