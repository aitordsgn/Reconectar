import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, } from '@fortawesome/free-brands-svg-icons'

export default function Navbar(){
    return(
        <>
        <header className="nav-head">
            <a href="/" className="logo-container">
                <img src="./heart_idea.svg" alt="Web Logo" className="logo"/>
            </a>
            <nav className= "nav">
                <ul className="nav-ul">
                    <li className="nav-li"><a href="./Preguntas">Preguntas</a></li>
                    <li className="nav-li"><a href="./Juegos">Juegos</a></li>
                </ul>
            </nav>
            <div className="social-buttons">
                <a  href="https://twitter.com/reyortegaitor" target="_blank" rel="noopener noreferrer"aria-label="Twitter" className='nav-logos'>
                    <FontAwesomeIcon icon={faTwitter} className="nav-logos"/>
                </a>
                <a  href="https://github.com/aitordsgn" target="_blank" rel="noopener noreferrer" aria-label="Github" className='nav-logos'>
                    <FontAwesomeIcon icon={faGithub} className="nav-logos"/>
                </a>
                <a  href="https://github.com/aitordsgn" target="_blank" rel="noopener noreferrer" aria-label="Github " className='nav-donate'>
                    Donate
                </a>
            </div>
        </header>
        </>
    )
}