import { GameCard } from './GameCard.jsx'
import Videogames from './Videogames.json'
import Navbar from './navbar.jsx'

export function App() {
    return(
        <>
        <Navbar/>
        <h1 className= 'gamePage-title' > Juegos para jugar en Pareja</h1>
        <div className='gameGrid'>
            {
                Videogames.map(videogame => {
                    return(
                        <GameCard imgName ={videogame.Photo} gameName={videogame.name} tags ={videogame.Tag} key={videogame.id}/>
                    )
                })
            }
       </div>
        </>
    )
}