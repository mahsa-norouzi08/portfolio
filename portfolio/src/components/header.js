import React, { useState } from "react";
import "./header.css";

export default function Header({}) {
  const [burger, setBurger] = useState(false);
  const open = (e) => {
    setBurger(!burger);
  };

  return (
    <div>
      <ul className="horizintalnavbar">
        <li>ABOUT ME</li>
        <li>EDUCATION</li>
        <li>SKILLS</li>
        <li>WORK EXPERIENCE</li>
        <li>LANGUAGE</li>
        <li>PROJECTS</li>
        <li>CERTIFICATES</li>
        <li>CONTACT</li>
      </ul>
      <div className="burgerdiv">
        <div
          id="nav-icon4"
          onClick={open}
          className={burger ? "open burgerdisplay " : "burgerdisplay"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {burger ? (
          <ul className="verticalnavbar">
            <li>ABOUT ME</li>
            <li>EDUCATION</li>
            <li>SKILLS</li>
            <li>WORK EXPERIENCE</li>
            <li>LANGUAGE</li>
            <li>PROJECTS</li>
            <li>CERTIFICATES</li>
            <li>CONTACT</li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
