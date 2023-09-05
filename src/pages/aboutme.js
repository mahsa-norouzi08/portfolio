import React, { useState } from "react";
import Wallpaper from "../static/aboutwallpaper.png";
import { SocialIcon } from "react-social-icons";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="bacground-title">About</h1>
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
          <SocialIcon
            className="social-icon"
            url="https://email.com"
            bgColor="black"
            style={{ height: 25, width: 25, marginRight: 3 }}
          />
          <SocialIcon
            className="social-icon"
            url="https://www.linkedin.com/in/mahsa-norouzi08/"
            bgColor="black"
            style={{ height: 25, width: 25, marginRight: 3 }}
          />
          <SocialIcon
            className="social-icon"
            url="https://github.com/mahsa-norouzi08"
            bgColor="black"
            style={{ height: 25, width: 25, marginRight: 3 }}
          />
          <SocialIcon
            className="social-icon"
            url="https://telegram.me/mahsa_norouzi08"
            bgColor="black"
            style={{ height: 25, width: 25, marginRight: 3 }}
          />
        </div>
      </div>
    </div>
  );
}
