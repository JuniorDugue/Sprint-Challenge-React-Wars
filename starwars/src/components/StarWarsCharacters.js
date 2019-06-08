import React from "react";

import "./StarWars.scss";

const StarWarsCharacters = (props) => {
  return(
    <div className="starWarsContainer">
      <h3>{props.character.name}</h3>
      <p>
        <strong>Species:</strong>{props.character.species}
      </p>
      <p>
        <strong>Gender:</strong>
        {props.character.gender}
      </p>
      <p>
        <strong>Height:</strong>
        {props.character.height}
      </p>
    </div>
  )
}

export default StarWarsCharacters;