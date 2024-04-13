import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="inside">
      <div className="text">
        <p className="p">
          {props.pg}
        </p>
      </div>
      <img className="certificate" src={props.img} alt="" />
    </div>
  );
}

export default Card;
