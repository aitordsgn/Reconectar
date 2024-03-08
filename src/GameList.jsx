import { useEffect, useState } from "react";
import { GameCard } from './GameCard.jsx';
import { Footer_Component } from './Footer.jsx';
import { Formulario } from "./Form";
import items from './Videogames.json';
import { FaCaretDown, FaHeart} from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";


export function ListadoJuegos() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [showFavorites, setShowFavorites] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [openPlatforms, setOpenPlatforms] = useState(false);

  let filters = ["Cooperativo", "Vs", "Party"];
  let filtrosPlataformas = ["Play Station", "Xbox", "Switch", "Steam"];

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  useEffect(() => {
    filterItems();
  }, [selectedFilters, showFavorites, selectedPlatforms]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const handlePlatformCheckboxChange = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      const updatedPlatforms = selectedPlatforms.filter((p) => p !== platform);
      setSelectedPlatforms(updatedPlatforms);
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const filterItems = () => {
    let tempItems = [...items];

    if (selectedFilters.length > 0) {
      tempItems = tempItems.filter((item) => selectedFilters.includes(item.category));
    }

    if (selectedPlatforms.length > 0) {
      tempItems = tempItems.filter((item) => {
        return item.platforms.some((platform) =>
          selectedPlatforms.includes(platform.trim())
        );
      });
    }

    if (showFavorites) {
      tempItems = tempItems.filter((item) => item.fav === true || item.fav === "true");
    }

    setFilteredItems(tempItems);
  };

  const toggleFiltersDropdown = () => {
    setOpenFilters(!openFilters);
    setOpenPlatforms(false);
  };

  const togglePlatformsDropdown = () => {
    setOpenPlatforms(!openPlatforms);
    setOpenFilters(false);
  };

  const generatePlatformOptions = () => {
    return filtrosPlataformas.map((platform, idx) => (
      <label key={`platform-${idx}`} className="checkbox-label">
        <input
          type="checkbox"
          checked={selectedPlatforms.includes(platform)}
          onChange={() => handlePlatformCheckboxChange(platform)}
          className="checkbox"
        />
        {platform}
      </label>
    ));
  };

  return (
    <>
      <div className='BackgroundContainer'/>
      <h1 className='gamePage-title'> Videojuegos </h1>
      <h2 className='gamePage-Desc'> Descubre los mejores juegos para jugar en pareja</h2>
      <div className='Centrado-botones'>
        <div className='dropdown-button-container'>
          <button className='button-dropdown' onClick={toggleFiltersDropdown}>
            Filtrar <FaCaretDown className='buttonIcons'/>
          </button>
          <div className={`contenedor-filtros ${openFilters ? 'active' : 'inactive'}`}>
            {filters.map((category, idx) => (
              <label className="checkbox-label" key={`filters-${idx}`}>
                <input
                  type="checkbox"
                  onClick={() => handleFilterButtonClick(category)}
                  className={`checkbox ${selectedFilters?.includes(category) ? "active" : ""}`}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className='dropdown-button-container'>
          <button className='button-dropdown' onClick={togglePlatformsDropdown}>
            Plataformas <FaCaretDown className='buttonIcons'/>
          </button>
          <div className={`contenedor-filtros ${openPlatforms ? 'active' : 'inactive'}`}>
            {generatePlatformOptions()}
          </div>
        </div>

        <button className={`button-fav ${showFavorites ? 'active' : 'inactive'}`} type="button" onClick={() => setShowFavorites(!showFavorites)}>
          Favorito <FaHeart className='buttonIcons' />
        </button>
      </div>

      <div className='gameList'>
        {filteredItems.length === 0 ? (
          <span className='Notificacion'>No hay ningún juego que coincida con tu búsqueda.</span>
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
                platforms={item.platforms}
              />
            ))}
          </div>
        )}
      </div>

      <Formulario />

      {backToTopButton && (
        <button className='backtotop' onClick={scrollUp}>
          <FaArrowUpLong className='icon'/>
        </button>
      )}

      <Footer_Component />
    </>
  );
}
