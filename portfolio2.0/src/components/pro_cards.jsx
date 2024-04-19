import React from "react";
import "./pro_cards.css";

function Pro_cards(props) {
  return (
    <div className="wi">
      <div className="num">{props.num}</div>
      <div className="name">{props.name}</div>
      <div className="dis">{props.dis}</div>
    </div>
  );
}

export default Pro_cards;
