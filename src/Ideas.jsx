import './ideas.css'
import Navbar from './navbar'
import './idea_generator.js'

export function Ideas (){
    return(
        <>
        <Navbar/>
        <div class="Background-container">
            <div class="categories-container">
                <div class="category-buttons">
                    <button class="category-button" data-category="Todas">Todas</button>
                    <button class="category-button" data-category="Fuera de Casa">Fuera de Casa</button>
                    <button class="category-button" data-category="Planificada">Planificada</button>
                    <button class="category-button" data-category="En Casa">En Casa</button>
                    <button class="category-button" data-category="Especial">Especial</button>
                    <button class="category-button" data-category="Cocina">Cocina</button>
                    <button class="category-button" data-category="Activo">Activo</button>
                </div>
            </div>
            <div class="container">
                <h1 id="dateIdea">Presiona el boton para generar una idea para una cita</h1>
                <button class="generate-idea-button" id="generateButton">Generar Idea</button>
            </div>
        </div>
        </>
    )
}
