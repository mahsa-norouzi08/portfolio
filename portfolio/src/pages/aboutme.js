import React, { useState } from "react";
import "../components/aboutme.css";
import Wallpaper from "../static/aboutwallpaper.png";
import {VscGithub} from "react-icons/vsc";
import {RiTelegramLine} from "react-icons/ri";
import {MdShareLocation} from "react-icons/md";
import {TiSocialLinkedinCircular} from "react-icons/ti";

export default function AboutMe() {
  
  return (
    <div className="container">
      <div className="node-container">
        <img className="node" src={Wallpaper} alt="Profile" />
      </div>
      <div className="bio">
        <h1 className="name">Mahsa Norouzi</h1>
        <h2 className="job">Frontend Developer</h2>
        <hr />
        <p className="about-text">
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
          <VscGithub className="octocat" fontSize={19} id="octocat"/>
          <RiTelegramLine className="icon" fontSize={22}/>
          <MdShareLocation className="icon" fontSize={22}/>
          <TiSocialLinkedinCircular className="icon" fontSize={24}/>
          </div>
        </div>
      </div>
    </div>
  );
}
