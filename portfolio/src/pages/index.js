import avatar from "../static/avatar.png";
import "../index.css";
import about from "../static/about.png";
import skills from "../static/skills.png";
import education from "../static/education.png";
import expereince from "../static/experience.png";
import language from "../static/lan1.png";

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
];

const PageCard = ({ page }) => {
  return (
    <a className="skill-card" id="id-page" href={page.link}>
      <img
        width={300}
        src={page.pic}
        alt={page.title}
        style={{ borderRadius: "40px" }}
      />
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
