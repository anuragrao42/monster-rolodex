import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x200`}
      />
      <h2>{props.monster.name} </h2>
      <p>
        <strong>{props.monster.email}</strong>
      </p>
    </div>
  );
};
