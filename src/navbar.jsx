import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

// Define CSS modules styles using a separate file (e.g., Navbar.module.css)
import styles from './nav.module.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  state = {clicked : false};
  handleclick =() => {
    this.setState({clicked:
      !this.state.cliked})
  }
  render() {
  return (
    <>
      <nav className={styles.navHead}>
        <a
          href="/"
          className={styles.logoContainer}
          rel="nofollow noopener"
          aria-label="Web Logo"
        >
          <img src="./Icono_opt.svg" alt="Web Logo" className={styles.logo} />
        </a>
        <div className={styles.nav}>
          <ul className={styles.navUl}>
            <li className={styles.navLink}>
              <Link to="/" className={styles.navLink}>
                Ideas
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/Videojuegos" className={styles.navLink}>
                Videojuegos
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/Eventos" className={styles.navLink}>
                Eventos
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.socialButtons}>
          <a
            href="https://twitter.com/reyortegaitor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className={styles.navLogos}
          >
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          </a>
          <a
            href="https://github.com/aitordsgn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className={styles.navLogos}
          >
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a
            href="https://github.com/aitordsgn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate"
            className={styles.navDonate}
          >
            Donate
          </a>
        </div>
        <div className={styles.mobile} onClick={this.handleclick}>
          <FontAwesomeIcon icon = {this.state.clicked ? faTimes:faBars} className={styles.icon}/>
        </div>
      </nav>
    </>
  );
}
}
export default Navbar;