import React, { Component } from "react";
import "./card.css";

export default function Card({ description, img, alt }) {
  return (
    <div className="card-container">
      
      <figure style={{ "--c": "#fff5" }}>
        <img className="skillimg" src={img} alt={alt} />
        <figcaption>{description}</figcaption>
      </figure>
    </div>
  );
}
