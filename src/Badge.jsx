const CategoryButton = styled.button`

    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 0.3rem;
    padding: 5px;
    margin: 5px;
    height: fit-content;
    font-family: 'Inter' , sans-serif;
    font-weight: normal;
    background-color: ${(props => 
        props.variant === "Cocina" 
        ? "#FCECB0" 
        : props.variant === "En Casa" 
        ? "#DFF0FF" 
        : props.variant === "Activo" 
        ? "#FEDEBC"
        : props.variant === "Fuera de Casa" 
        ? "#BCFEFA" 
        : props.variant === "Planificada" 
        ? "#FEBCEC" 
        : props.variant === "Especial" 
        ? "#B8ADFF" 
        : props.variant === "Naturaleza" 
        ? "#C3F8DF" 
        : props.variant === "DIY" 
        ? "#FFC7C7" 
        :"#D9D9D9")};
    color: black;
    `;
export function BadgeButton (categoria) {
    return(
        <>
            <button className="Badge">
                {categoria}
            </button>
        </>
    )
}