// GeneradorIdeas.jsx
import { useState, useEffect } from 'react';
import ideasJson from '../assets/dates.json';
import { FaLightbulb, FaCalendar } from "react-icons/fa";
import { BadgeButton } from './Badge.jsx'; // Importar BadgeButton
import styles from '../styles/ideas.module.css';

function obtenerIdeaAleatoria(json, categoriasSeleccionadas) {
  // Filtrar las ideas según las categorías seleccionadas
  const ideasFiltradas = json.filter(idea =>
    categoriasSeleccionadas.includes(idea.Categoria)
  );
  console.log("Categorías Seleccionadas:", categoriasSeleccionadas);
  console.log("Ideas Filtradas:", ideasFiltradas);
  // Si no hay ideas coincidentes o no hay categorías seleccionadas, mostrar un mensaje
  if (ideasFiltradas.length === 0) {
    console.log("No hay ideas para las categorías seleccionadas");
    return "No hay ideas para las categorías seleccionadas";
  }

  // Obtener una idea aleatoria de las ideas filtradas
  return ideasFiltradas[Math.floor(Math.random() * ideasFiltradas.length)];
}

export function Generador_Ideas() {
  const [ideaActual, setIdeaActual] = useState('');
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [mostrarTexto, setMostrarTexto] = useState(true);

  const categorias = [
    "En Casa",
    "Fuera de Casa",
    "Planificada",
    "Naturaleza",
    "Especial",
    "DIY",
    "Cocina",
    "Activo"
  ];

  // Efecto para seleccionar todas las categorías si ninguna está seleccionada
  useEffect(() => {
    if (categoriasSeleccionadas.length === 0) {
      setCategoriasSeleccionadas([  "En Casa",
      "Fuera de Casa",
      "Planificada",
      "Naturaleza",
      "Especial",
      "DIY",
      "Cocina",
      "Activo"]); // Seleccionar por defecto las categorías "En Casa" y "Fuera de Casa"
      console.log("Todas las categorías están seleccionadas");
    }
  }, [categoriasSeleccionadas, setCategoriasSeleccionadas]);

  const handleCategoryClick = (categoria) => {
    const updatedCategoriasSeleccionadas = [...categoriasSeleccionadas];
    const categoriaIndex = updatedCategoriasSeleccionadas.indexOf(categoria);
    if (categoriaIndex !== -1) {
      updatedCategoriasSeleccionadas.splice(categoriaIndex, 1);
    } else {
      updatedCategoriasSeleccionadas.push(categoria);
    }
    setCategoriasSeleccionadas(updatedCategoriasSeleccionadas); // Actualizar el estado
    console.log("Categorías Seleccionadas:", updatedCategoriasSeleccionadas);
  };

  return (
    <>
      <div className='BackgroundContainer'/>
      <div className={styles.categoriesContainer}>
        {/* Crear botones BadgeButton para cada categoría */}
        {categorias.map((categoria, index) => (
          <BadgeButton
            key={index}
            category={categoria}
            selected={categoriasSeleccionadas.includes(categoria)}
            onClick={() => handleCategoryClick(categoria)}
          />
        ))}
      </div>
      <div className={styles.containerIdeas}>
        <h1 className={styles.DateIdea}>{mostrarTexto ? "Presiona el botón para generar una idea nueva" : ideaActual}</h1>
        <div className={styles.buttonContainer}>
          <button
            className={styles.generateIdeaButton}
            onClick={() => {
              const ideaAleatoria = obtenerIdeaAleatoria(ideasJson, categoriasSeleccionadas);
              setIdeaActual(ideaAleatoria.Valor);
              setMostrarTexto(false);
            }}
          >
            <FaLightbulb className={styles.CalendarIcon} />
            <span className={styles.lable}>Generar Idea</span>
          </button>
          <button className={styles.Calendario}>
            <FaCalendar className={styles.CalendarIcon} />
            <span className={styles.lable}>Añadir Evento</span>
          </button>
        </div>
      </div>
    </>
  );
}
