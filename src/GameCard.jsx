import "./GameCard.css"
import styled from 'styled-components';

const TagComponent = styled.p`
    position: relative;
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
        props.variant === "Cooperativo" 
        ? "#DFF0FF" 
        : props.variant === "VS" 
        ? "#FFC7C7" 
        : props.variant === "Party" 
        ? "#C3F8DF": "#D9D9D9")};
    color: ${(props => 
        props.variant === "Cooperativo" 
        ? "#7DC2FF" 
        : props.variant === "VS"
        ? "#BE5E5E" 
        : props.variant === "Party" 
        ? "#3B9D6F": "#2222" )};
    `;

export function GameCard({imgName, gameName, tags, isFavourite}){
    return(
       <div className="card">
            <img className="card-image" src={`src/assets/imgs/${imgName}`} alt="Splash screen"></img>
            <h2 className="card-title">{gameName}</h2>
            <TagComponent variant={tags} >{tags}</TagComponent>
       </div> 
    );
}

