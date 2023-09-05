import avatar from "../static/avatar.png";
import "../index.css";
import about from "../static/about.png";
import skills from "../static/skills.png";
import education from "../static/education.png";
import expereince from "../static/experience.png";
import language from "../static/lan1.png";
import resume from "../static/resume.png";
import pdf from "../static/MahsaNorouzi.pdf";
import { useState } from "react";

const pages = [
  {
    pic: about,
    title: "About me",
    link: "/aboutme",
  },
  {
    pic: skills,
    title: "My skills",
    link: "/skills",
  },
  {
    pic: education,
    title: "My educations",
    link: "/edu",
  },
  {
    pic: language,
    title: "Languages",
    link: "/language",
  },
  {
    pic: expereince,
    title: "My experience",
    link: "/experience",
  },
  {
    pic: resume,
    title: "My resume file",
    link: pdf,
  },
];

const PageCard = ({ page }) => {
  const [hover, setHover] = useState(false);
  return (
    <a className="skill-card" id="id-page" href={page.link}>
      {hover ? (
        <button className="page-button" onMouseLeave={() => setHover(false)}>
          {page.title}
        </button>
      ) : (
        <img
          width={300}
          src={page.pic}
          alt={page.title}
          style={{ borderRadius: "1vmax" }}
          onMouseOver={() => setHover(true)}
        />
      )}
    </a>
  );
};

export default function Home() {
  return (
    <div>
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="skill-flex" id="id-home-parent">
        {pages.map((page, index) => (
          <PageCard key={index} page={page} />
        ))}
      </div>
    </div>
  );
}
