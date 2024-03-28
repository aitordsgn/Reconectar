import styled from 'styled-components';

const CategoryButton = styled.button`
   text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border-radius: 2vh;
  padding: 10px 20px;
  margin: 1vh 0.2vw;
  font-family: 'Inter Variable', -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  width: fit-content;
  height: fit-content;
  border: 1px;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) =>
    props.selected === false
      ? 'lightgray'
      : props.variant === "Cocina"
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
      : "#D9D9D9"};
  border-color: ${(props) =>
    props.variant === "Cocina"
      ? "#a19567"
      : props.variant === "En Casa"
      ? "#8daeca"
      : props.variant === "Activo"
      ? "#c0a68a"
      : props.variant === "Fuera de Casa"
      ? "#85b8b4"
      : props.variant === "Planificada"
      ? "#aa759c"
      : props.variant === "Especial"
      ? "#7870ad"
      : props.variant === "Naturaleza"
      ? "#86b9a1"
      : props.variant === "DIY"
      ? "#c98d8d"
      : "#a5a4a4"};
  color: ${(props) => (props.selected === false ? 'darkgray' : 'black')};
  cursor: pointer;
  text-decoration: ${(props) => (props.selected  === false ? 'line-through' : 'none')}; 
  &:hover {
    background-color: lightgray;
    color: darkgray;
    text-decoration:line-through;
  }
    `;
    
    export function BadgeButton({ category, selected, onClick }) { // Agrega "selected" y "onClick"
        return (
          <>
            <CategoryButton variant={category} selected={selected} onClick={onClick}>
              {category}
            </CategoryButton>
          </>
        );
      }