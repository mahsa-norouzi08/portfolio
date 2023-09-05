import React from "react";
import lan from "../static/language.jpg";
import fa from "../static/persian.jpg";
import span from "../static/Spain.jpg";
import en from "../static/american.jpg";

const languages = [
  {
    title: "ENGLISH",
    icon: en,
    description: "Professional",
  },
  {
    title: "SPANISH",
    icon: span,
    description: "Fun",
  },
  {
    title: "PERSIAN",
    icon: fa,
    description: "Native",
  },
];

const LanguageCard = ({ language }) => {
  return (
    <div className="skill-card" id="id-edu">
      <img
        width={60}
        src={language.icon}
        alt={language.title}
        style={{ borderRadius: "20vmax" }}
      />
      {/* <h1 style={{fontWeight: "bolder"}}>{language.icon}</h1> */}
      <br />
      <h3 style={{ fontWeight: "bold" }}>{language.title}</h3>
      <p>{language.description}</p>
    </div>
  );
};

const Language = () => {
  return (
    <>
      <div className="lang-parent">
        <div className="div-lang">
          <h1 className="bacground-title" id="id-lan">
            Lan
          </h1>
          <h1 className="bacground-title" id="id-gu">
            gu
          </h1>
          <h1 className="bacground-title" id="id-age">
            age
          </h1>
        </div>
        <img src={lan} alt="edu-cap" className="lan-pic" />
      </div>

      <div className="skill-flex" id="id-edu-parent">
        {languages.map((language, index) => (
          <LanguageCard key={index} language={language} />
        ))}
      </div>
    </>
  );
};

export default Language;
