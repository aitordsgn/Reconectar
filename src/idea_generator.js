import React, { useState, useEffect } from 'react';
import { BadgeButton } from './components/Badge.jsx';
import styles from './styles/ideas.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Set from 'collections/set'; // Importa la clase Set de JavaScript

function obtenerIdeaAleatoria(json, categoriasSeleccionadas) {
  // Filtrar las ideas según las categorías seleccionadas
  const ideasFiltradas = json.filter(idea =>
    categoriasSeleccionadas.length === 0 || // Mostrar todas si no hay categorías seleccionadas
    categoriasSeleccionadas.includes(idea.Categoria)
  );

  // Obtener una idea aleatoria de las ideas filtradas
  return ideasFiltradas[Math.floor(Math.random() * ideasFiltradas.length)];
}

export function Generador_Ideas() {
  const [ideasJson, setIdeasJson] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [categoriasMostradas, setCategoriasMostradas] = useState(new Set()); // Crea un estado para las categorías mostradas
  const [ideaActual, setIdeaActual] = useState('');
  const categorias = ["Comida", "En Casa", "Cultura", "Naturaleza","DIY","Fuera de Casa","Activo"];

  useEffect(() => {
    fetch('./date-ideas.csv')
      .then((response) => response.text())
      .then((data) => {
        const parsedIdeas = parseCsv(data);
        setIdeasJson(parsedIdeas);
      })
      .catch((error) => {
        console.error("Error fetching date ideas: " + error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    const updatedCategoriasSeleccionadas = categoriasSeleccionadas.includes(category)
      ? categoriasSeleccionadas.filter((cat) => cat !== category)
      : [...categoriasSeleccionadas, category];
    setCategoriasSeleccionadas(updatedCategoriasSeleccionadas);
  };

  const handleGenerateClick = () => {
    const ideaAleatoria = obtenerIdeaAleatoria(ideasJson, categoriasSeleccionadas);
    setIdeaActual(ideaAleatoria.Valor);
  };

  return (
    <>
      <div className={styles.BackgroundContainer}>
        <div className={styles.categoriesContainer}>
          {/* Crear botones BadgeButton para cada categoría */}
          {ideasJson.map((idea, index) => {
            const categoria = idea.Categoria;

            // Si la categoría no se ha mostrado, mostrar el botón
            if (!categoriasMostradas.has(categoria)) {
              categoriasMostradas.add(categoria); // Agrega la categoría al conjunto

              return (
                <BadgeButton
                  key={index}
                  category={categoria}
                  selected={categoriasSeleccionadas.includes(categoria)}
                  onClick={() => handleCategoryClick(categoria)}
                />
              );
            }

            return null; // No mostrar el botón si la categoría ya se ha mostrado
          })}
        </div>
        <div className={styles.containerIdeas}>
          <h1 className={styles.DateIdea}>{ideaActual}</h1>
          <div class={styles.buttonContainer}>
            <button
              className={styles.generateIdeaButton}
              onClick={handleGenerateClick}
            >
              <FontAwesomeIcon icon={faLightbulb} class={styles.CalendarIcon} />
              <span class={styles.lable}>Generar Idea</span>
            </button>
            <button className={styles.Calendario}>
              <FontAwesomeIcon icon={faCalendar} class={styles.CalendarIcon} />
              <span class={styles.lable}>Añadir Evento</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}