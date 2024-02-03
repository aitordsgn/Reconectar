import { GameCard } from './GameCard.jsx'
import items from './Videogames.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import  React, {useEffect,useState } from "react"
import { Footer_Component } from './Footer.jsx'



export function ListadoJuegos() {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] =useState(items);
    const [showFavorites, setShowFavorites] = useState(false);
    const [open,setOpen] =useState(false);
    let filters = ["Cooperativo", "Vs", "Party"];

  const [backToTopButton,setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        setBackToTopButton(true); 
      }
      else
      {
        setBackToTopButton(false)
      }
    });
  }, []);

  useEffect(() => {
    filterItems();
  }, [selectedFilters, showFavorites]);

    const scrollUp = () => {
      window.scrollTo({
        top: 0 ,
        behavior : "smooth"
      })
    }
 
    //Handle which button is clicked
    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
          let filters = selectedFilters.filter((el) => el !== selectedCategory);
          setSelectedFilters(filters);
        } else {
          setSelectedFilters([...selectedFilters, selectedCategory]);
        }
      };

      const handleFavButtonClick = () => {
        console.log("La función handleFavButtonClick se está ejecutando"); // Agrega esta línea
        setShowFavorites(!showFavorites);
      };


      //Filtered items saved at filterItems
      useEffect(() => {
        filterItems();
      }, [selectedFilters]);


      //FileterdItems will have all values whenever it doesnt have anithing.
      const filterItems = () => {
        let tempItems = [...items];
        // Apply category filters
        if (selectedFilters.length > 0) {
          tempItems = tempItems.filter((item) => selectedFilters.includes(item.category));
        }
        // Apply favorite filter
        if (showFavorites) {
          tempItems = tempItems.filter((item) => item.fav === true || item.fav === "true");
        }
        setFilteredItems(tempItems);
      };
        




    return(
           <>
        <h1 className= 'gamePage-title' > Videojuegos </h1>
        <h2 className='gamePage-Desc'> Descubre los mejores juegos para jugar en pareja</h2>
        <div className='Centrado-botones'>
          <div className='dropdown-button-container'>
          <button className='button-dropdown ' onClick={() => {setOpen(!open)}}>Filtrar <FontAwesomeIcon icon={faCaretDown}/></button>
          
          <div className={`contenedor-filtros ${open? 'active' : 'inactive'}`}>
              {filters.map((category,idx) => (
                <label className="checkbox-label">
                <input type="checkbox"  
                onClick={() => handleFilterButtonClick(category)}
                className={`checkbox ${
                    selectedFilters?.includes(category) ? "active" : ""
                    }`}
                key={`filters-${idx}`}/>
                {category} 
                </label>
              ))}
          </div> 
        </div>

        <button className={`button-fav ${showFavorites ? 'active' : 'inactive'}`} type="button" onClick={handleFavButtonClick}>
          Favorito
        </button>

        </div>

        <div className='gameGrid'>
        {filteredItems.length === 0 ? (
      <span className='Notificación'>No hay ningún juego que coincida con tu búsqueda.</span>
    ) : (
      <div className="gameGrid">
        {filteredItems.map((item, idx) => (
          <GameCard
            imgName={item.Photo}
            gameName={item.name}
            tags={item.category}
            key={idx}
            isFavourite={item.fav}
            link={item.link}
          />
        ))}
      </div>
    )}
       </div>
       {backToTopButton && (
       <button className='backtotop' onClick = {() =>scrollUp()}>
       <FontAwesomeIcon icon={faArrowUp} />
        </button>)}
        <Footer_Component/>
        </>
    )

  }
