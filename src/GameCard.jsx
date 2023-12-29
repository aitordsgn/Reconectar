import "./GameCard.css"

export function GameCard({imgName, gameName, tags}){
    return(
       <div className="card">
            <img className="card-image" src={`src/assets/${imgName}`} alt="Splash screen"></img>
            <h2 className="card-title">{gameName}</h2>
            <p className="card-tag">{tags}</p>
       </div> 
    );
}