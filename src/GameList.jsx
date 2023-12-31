import { GameCard } from './GameCard.jsx'
import Videogames from './Videogames.json'
import Navbar from './navbar.jsx'


export function ListadoJuegos() {
    return(
        <>
        <Navbar/>
        <h1 className= 'gamePage-title' > Videojuegos </h1>
        <h4 className='gamePage-Desc'> Descubre los mejores juegos para jugar en pareja</h4>
        <div>
            <button className='button-tipo' type="button">Tipo</button>
            <button className='button-fav' type="button">Favorito</button>
        </div>
        <div className='gameGrid'>
            {
                Videogames.map(videogame => {
                    return(
                        <GameCard imgName ={videogame.Photo} gameName={videogame.name} tags ={videogame.Tag} key={videogame.id} isFavourite={videogame.fav} link ={videogame.link}/>
                    )
                })
            }
       </div>
        </>
    )
}