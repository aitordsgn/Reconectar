const dateIdeaElement = document.getElementById("dateIdea");
const generateButton = document.getElementById("generateButton");
const categoryButtons = document.querySelectorAll(".category-button");
let selectedCategory = "Todas"; 

// JavaScript (script.js)

// ...

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedCategory = button.getAttribute("data-category");
        updateButtonText();
    });
});

// ...

generateButton.addEventListener ("click", () => {
    fetch("./date-ideas.csv")
        .then((response) => response.text())
        .then((data) => {
            const ideas = parseCsv(data);
            
            if (!ideas || ideas.length === 0) {
                console.error("No se encontraron ideas en el archivo CSV.");
                return;
            }

            // Filter ideas based on the selected category
            const filteredIdeas = selectedCategory === "Todas"
                ? ideas
                : ideas.filter(idea => idea.Categoria === selectedCategory || selectedCategory === "Todas");

            if (filteredIdeas.length === 0) {
                console.error(`No hay ideas para la categoría: ${selectedCategory}`);
                return;
            }

            const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
            const randomIdea = filteredIdeas[randomIndex];
            
            // Asegurémonos de que la propiedad correcta se esté utilizando
            dateIdeaElement.textContent = randomIdea.Valor;

            // Agregamos este console.log para verificar si se está obteniendo la idea correctamente
            console.log("Idea seleccionada:", randomIdea);
        })
        .catch((error) => {
            console.error("Error fetching date ideas: " + error);
        });
});




function parseCsv(csv) {
    const lines = csv.split(/\r\n|\n/);
    const headers = lines[0].split(",");
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(",");
        const entry = {};

        for (let j = 0; j < headers.length; j++) {
            entry[headers[j]] = currentLine[j];
        }

        result.push(entry);
    }

    return result;
}

function updateButtonText() {
    generateButton.textContent = `Generar una idea de ${selectedCategory === "Todas" ? "culquier categoría" : `${selectedCategory} `}`;
}