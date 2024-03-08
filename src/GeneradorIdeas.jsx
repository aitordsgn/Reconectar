import { BadgeButton } from './Badge.jsx';
import styles from './ideas.module.css';
import { FaLightbulb, FaCalendar} from "react-icons/fa";

import { useState } from 'react';
import ideasJson from './dates.json';


function obtenerIdeaAleatoria(json, categoriasSeleccionadas) {
  // Filtrar las ideas según las categorías seleccionadas
  const ideasFiltradas = json.filter(idea =>
    categoriasSeleccionadas.length === 0 || // Mostrar todas si no hay categorías seleccionadas
    categoriasSeleccionadas.includes(idea.Categoria)
  );

  // Si no hay ideas coincidentes, mostrar un mensaje
  if (ideasFiltradas.length === 0) {
    return "No hay ideas para las categorías seleccionadas";
  }

  // Obtener una idea aleatoria de las ideas filtradas
  return ideasFiltradas[Math.floor(Math.random() * ideasFiltradas.length)];
}
 const handleCategoryClick = (Cat) => {
//   // Obtener el estado actual de las categorías
//   const updatedCategoriasSeleccionadas = [...categoriasSeleccionadas];

//   // Si la categoría ya está seleccionada, eliminarla
//   if (updatedCategoriasSeleccionadas.includes(Cat)) {
//     updatedCategoriasSeleccionadas.splice(updatedCategoriasSeleccionadas.indexOf(Cat), 1);
//   } else {
//     // Si no está seleccionada, agregarla
//     updatedCategoriasSeleccionadas.push(Cat);
//   }
//   useEffect(() => {
//     // Registrar el montaje del componente
//     console.log('Componente Generador_Ideas montado');
  
//     // Registrar la desmontaje del componente
//     return () => console.log('Componente Generador_Ideas desmontado');
//   }, []);
//   // Actualizar el estado con las categorías actualizadas
//   setCategoriasSeleccionadas(updatedCategoriasSeleccionadas);
//   console.log('Categorías:', categoriasSeleccionadas);
 };
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
    "Activo",
  ];

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
              <FaLightbulb class={styles.CalendarIcon} />
              <span className={styles.lable}>Generar Idea</span>
            </button>
            <button className={styles.Calendario}>
              <FaCalendar class={styles.CalendarIcon} />
              <span className={styles.lable}>Añadir Evento</span>
            </button>
          </div>
        </div>
    </>
  );
}
