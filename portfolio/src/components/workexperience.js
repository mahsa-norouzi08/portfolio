import React, { Component } from "react";
import "./workexperience.css";

export default function Experience({}) {
  return (
    <div className="container-experievce">
      <div className="titlediv">
        <h1 id="work-id" className="title-edu">
          Work Experience
        </h1>
      </div>
      <div className="div-experience">
        <h1 id="h1-font">Aeroespace Engineering</h1>
        <h2 id="h2-font">Mapna Group</h2>
        <hr id="id-hr"/>
        <p id="id-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>
      </div>
      <div className="div-experience">
        <h1 id="h1-font">Frontend Developer</h1>
        <h2 id="h2-font">Goldscan</h2>
        <hr id="id-hr"/>
        <p id="id-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>
      </div>
    </div>
  );
}
