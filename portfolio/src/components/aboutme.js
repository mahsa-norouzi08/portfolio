import React, { useState } from "react";
import "./aboutme.css";
import profilepic from "../static/profilepic.jpg";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagramSquare,
  FaMobile,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function AboutMe() {
  const [hoverInstagram, setHoverInstagram] = useState(false);
  const mouseInstagram = (e) => {
    setHoverInstagram(!hoverInstagram);
  };

  const [hoverTelegram, setHoverTelegram] = useState(false);
  const mouseTelegram = (e) => {
    setHoverTelegram(!hoverTelegram);
  };

  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const mouseLinkedin = (e) => {
    setHoverLinkedin(!hoverLinkedin);
  };

  return (
    <div className="container">
      <div className="picture">
        <img className="profimg" src={profilepic} alt="Profile" />
        <br />
        {hoverInstagram ? (
          <FaInstagramSquare className="icon" onMouseLeave={mouseInstagram} />
        ) : (
          <FaInstagram className="icon" onMouseOver={mouseInstagram} />
        )}
        {hoverLinkedin ? (
          <a href="http://www.linkedin.com/in/mahsa-norouzi08">
            <FaLinkedin className="icon" onMouseLeave={mouseLinkedin} />
          </a>
        ) : (
          <FaLinkedinIn className="icon" onMouseOver={mouseLinkedin} />
        )}
        {hoverTelegram ? (
          <FaTelegram className="icon" onMouseLeave={mouseTelegram} />
        ) : (
          <FaTelegramPlane className="icon" onMouseOver={mouseTelegram} />
        )}
      </div>
      <div className="bio">
        <h1>Mahsa Norouzi</h1>
        <h2>Frontend Developer</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="contact">
          <div className="contact-items">
            <FaEnvelope className="icon-contact" />
            <p className="text-contact">Mahsa.noroozi80@gmail.com</p>
          </div>
          <div className="contact-items">
            <FaMobile className="icon-contact" />
            <p className="text-contact">036998587545</p>
          </div>
          <div className="contact-items">
            <FaMapMarkerAlt className="icon-contact" />
            <p className="text-contact">Tehran, Iran</p>
          </div>
        </div>
      </div>
    </div>
  );
}
