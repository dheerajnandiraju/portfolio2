import React from "react";
import { useState } from "react";
import "./pro_cards.css";
import { FaGithub } from "react-icons/fa6";
import { TbBrandVercel } from "react-icons/tb";

function Pro_cards(props) {
  const git = props.git ? (<FaGithub size={40} />) : "";
  const ver = props.vercel ? <TbBrandVercel size={40} /> : "";

  return (
    <div className="wi">
      <div className="num">{props.num}</div>
      <div className="name">{props.name}</div>
      <div className="dis">{props.dis}</div>
      <div className="icons-cards">
        <div><a href={props.git} style={{ color: "white" }}>{git}</a></div>
        <div><a href={props.vercel} style={{ color: "white" }}>{ver}</a></div>
      </div>
    </div>
  );
}

export default Pro_cards;
