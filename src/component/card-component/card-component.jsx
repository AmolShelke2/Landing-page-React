import React from "react";

import "./card-component.styles.css";

const Card = ({ anime }) => {
  return (
    <div className="card-container">
      <img alt="anime" src={anime.imageUrl} />

      <div className="info">
        <h1> {anime.title}</h1>
        <p>{anime.id}</p>
      </div>
    </div>
  );
};

export default Card;
