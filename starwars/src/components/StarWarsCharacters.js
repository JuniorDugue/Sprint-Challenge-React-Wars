import React from "react";

import "./StarWars.scss";

const StarWarsCharacters = (props) => {
  return(
    <div className="starWarsContainer">
      <p>{props.character.name}</p>
    </div>
  )
}

export default StarWarsCharacters;