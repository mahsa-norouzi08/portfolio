import React from "react";
import edu from "../static/edu.jpg";
import sharif from "../static/sharif.png";

const educations = [
  {
    title: "Aerospace Engineering",
    icon: sharif,
    company:"Sharif University of Technology",
    date: "2019 - present",
  },
];

const EducationCard = ({ education }) => {
  return (
    <div className="skill-card" id="id-edu">
      <img
        width={60}
        src={education.icon}
        alt={education.title}
        style={{ borderRadius: "20vmax" }}
      />
      <br />
      <h3 style={{ fontWeight: "bold" }}>{education.title}</h3>
      <p>{education.company}</p>
      <p>{education.date}</p>
    </div>
  );
};

const Education = () => {
  return (
    <>
      <h1 className="bacground-title" id="id-education">
        Education
      </h1>
      <img src={edu} alt="edu-cap" width={500} className="edu-pic"/>
      <div className="skill-flex" id="id-edu-parent">
        {educations.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </div>
    </>
  );
};

export default Education;
