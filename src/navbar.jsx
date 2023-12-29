export default function Navbar(){
    return(
        <>
        <header className="nav-head">
            <div href="/" className="logo_container">
                <img src="heart_idea.svg" alt="Web Logo" className="logo"/>
            </div>
            <nav className= "nav">
                <ul className="nav-ul">
                    <li className="nav-li"><a href="./Preguntas">Preguntas</a></li>
                    <li className="nav-li"><a href="./Juegos">Juegos</a></li>
                </ul>
            </nav>
            <div class="social-buttons">
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
             <button onclick="window.location.href='donar.html'">Donar</button>
            </div>
        </header>
        </>
    )
}