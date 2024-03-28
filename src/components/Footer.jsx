import "../styles/footer.css"
import { FaInstagram , FaGithub } from "react-icons/fa"


export function Footer_Component(){
    return(
        <>
        
       <footer className="footer">
       <svg src="./wave.svg" className="spacer"></svg>
       <div className="coloring">
            <div className="footer-social-buttons">
                <a  href="https://www.instagram.com/aitordsgn/" target="_blank" rel="noopener noreferrer"aria-label="Personal design Instagram Link" className="a">
                    <FaInstagram className="footer-logos"/>
                </a>
                <a  href="https://github.com/aitordsgn/Reconectar" target="_blank" rel="noopener noreferrer" aria-label="Conexion a github del proyecto" className="a">
                    <FaGithub className="footer-logos"/>
                </a>
 
            </div>
            <span className='footer-bottom-text'> Creado por Aitor Rey Ortega</span>
        </div>
       </footer>
       </>
    )
}