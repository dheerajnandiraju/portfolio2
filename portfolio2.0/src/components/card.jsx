import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="inside">
      <div className="t">
        <p className="info">{props.pg}</p>
      </div>
      <img className="certificate" src={props.img} alt="" />
    </div>
  );
}

export default Card;
