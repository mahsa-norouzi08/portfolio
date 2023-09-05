import React from "react";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";
const Skills = [
  {
    title: "JAVASCRIPT",
    icon: <IoLogoJavascript />,
    explaine: [
      "Developing and maintaining client side rendering of the company web apllication",
    ],
  },
  {
    title: "PYTHON",
    icon: <IoLogoPython />,
    explaine: [
      "Developing and maintaining client side rendering of the company web apllication",
      "Learning frontend technologies as an intern engineer",
    ],
  },
  {
    title: "HTML",
    icon: <TbBrandHtml5 />,
    explaine: [
      "Developing and maintaining client side rendering of the company web apllication",
      "Learning frontend technologies as an intern engineer",
    ],
  },
  {
    title: "CSS",
    icon: <TbBrandCss3 />,
    explaine: [
      "Developing and maintaining client side rendering of the company web apllication",
      "Learning frontend technologies as an intern engineer",
    ],
  },
  {
    title: "REACT",
    icon: <FaReact />,
    explaine: [
      "Developing and maintaining client side rendering of the company web apllication",
      "Learning frontend technologies as an intern engineer",
    ],
  },
];

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <h3 style={{ fontWeight: "bold" }}>{skill.title}</h3>
      <p>{skill.explaine}</p>
    </div>
  );
};

const Skill = () => {
  return (
    <>
      <h1 className="bacground-title" id="id-skill">
        Skill
      </h1>

      <div className="skill-flex">
        {Skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default Skill;
