import React from "react";

import "./StarWars.scss";

const StarWarsCharacters = (props) => {
  return(
    <div className="starWarsContainer">
      <h3>{props.character.name}</h3>
      <li>
        <strong>Species:</strong>{props.character.species}
      </li>
      <li>
        <strong>Gender:</strong>
        {props.character.gender}
      </li>
      <li>
        <strong>Height:</strong>
        {props.character.height}
      </li>
    </div>
  )
}

export default StarWarsCharacters;