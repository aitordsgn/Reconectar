import styles from "./GameCard.module.css"
import styled from 'styled-components';
import { FaPlaystation, FaXbox, FaSteam, FaHeart} from "react-icons/fa";


const TagComponent = styled.p`

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
    font-family: 'Inter Variable' ,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
    font-weight: 600;
    background-color: ${(props => 
        props.variant === "Cooperativo" 
        ? "#DFF0FF" 
        : props.variant === "Vs" 
        ? "#FFC7C7" 
        : props.variant === "Party" 
        ? "#C3F8DF": "#D9D9D9")};
    color: ${(props => 
        props.variant === "Cooperativo" 
        ? "rgb(78 108 134)" 
        : props.variant === "Vs"
        ? "rgb(142 70 70)" 
        : props.variant === "Party" 
        ? "rgb(38 111 77)": "#2222" )};
    `;

export function GameCard({imgName, gameName, tags, isFavourite, link, platforms}){
    console.log('Platform array:', platforms);
    return(
       <article className= {styles.card}>
            <a href ={link} target="_blank" aria-label={`Link a web para ${gameName}`}  rel='noreferrer' className={styles.cardAImage}>
                <img loading ="lazy"  rel='noreferrer' className={styles.cardImage} src={`./Imgs/${imgName}` } alt="Splash screen" width="100%" height="100%"></img>
            </a>
            <a href ={link} aria-label={`Link a web para ${gameName}`} target="_blank"  rel='noreferrer' className={styles.NoChange}>
                <h2 className={styles.cardTitle}>{gameName}</h2>
            </a>
            <div className={styles.inline}>
                <TagComponent variant={tags} >{tags}</TagComponent>
                {/* New section for the console icons */}
                <div className={styles.consoleIcons}>
                    {platforms.includes('Play Station') ? <FaPlaystation className={styles.consoleIcon} /> : null}
                    {platforms.includes('Xbox') ? <FaXbox className={styles.consoleIcon} /> : null}
                    {platforms.includes('Switch') ? <img src="./Switch.svg" alt="Nintendo Switch" className={styles.consoleIcon} /> : null}
                    {platforms.includes('Steam') ? <FaSteam className={styles.consoleIcon} /> : null}
                </div>
            </div>          
            {isFavourite  ? <FaHeart className={styles.FavBadge}/> : null}

        </article> 
    );
}

