import React from "react";
import Card from "../card-component/card-component";

import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.animes.map((anime) => (
        <Card key={anime.id} anime={anime} />
      ))}
    </div>
  );
};
export default CardList;
