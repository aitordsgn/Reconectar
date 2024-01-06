import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, } from '@fortawesome/free-brands-svg-icons'


export function Footer_Component(){
    return(
        <>

       <footer className="footer">
            <div className="footer-social-buttons">
                <a  href="https://twitter.com/reyortegaitor" target="_blank" rel="noopener noreferrer"aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} className="footer-logos"/>
                </a>
                <a  href="https://github.com/aitordsgn" target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <FontAwesomeIcon icon={faGithub} className="footer-logos"/>
                </a>
 
            </div>
            <span className='footer-bottom-text'> Creado por Aitor Rey Ortega</span>
       </footer>
       </>
    )
}