import React from "react";
import "../../index.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a href="/" activeStyle>
          Home
        </a>
        <a href="/aboutme" activeStyle>
          About Me
        </a>
        <a href="/workexpereince" activeStyle>
          work Expereince
        </a>
        <a href="/education" activeStyle>
          Education
        </a>
        <a href="/language" activeStyle>
          Skills
        </a>
      </nav>
    </>
  );
};

export default Navbar;
