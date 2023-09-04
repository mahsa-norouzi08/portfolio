import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import GoldScan from "../static/gold.jpeg";
import Mapna from "../static/mapna.jfif";
import Advice from "../static/advice.png";
import Gamein from "../static/GAMEIN.jfif";

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const experiences = [
  {
    title: "FRONTEND DEVELOPER",
    company_name: "GoldScan",
    icon: GoldScan,
    iconBg: "#fff",
    date: "Jun 2023 - Present",
    points: [
      "Developing and maintaining client side rendering of the company web apllication",
      "Learning frontend technologies as an intern engineer",
    ],
  },
  {
    title: "AEROSPACE ENGINEER",
    company_name: "Mapna Group (Air Engine)",
    icon: Mapna,
    iconBg: "#fff",
    date: "Sep 2022 - Aug 2023",
    points: [
      "Working as an aerospace engineer in FADEC department",
      "Control performance of aero engine systems",
    ],
  },
  {
    title: "DIGITAL MARKETER SPECIALIST",
    company_name: "Gamein",
    icon: Gamein,
    iconBg: "#fff",
    date: "Aug 2022 - Jun 2023",
    points: ["campaign manager", "social media advertising manager"],
  },
  {
    title: "DIGITAL MARKETER SPECIALIST",
    company_name: "ADVICE",
    icon: Advice,
    iconBg: "#fff",
    date: "Jun 2022 - Aug 2022",
    points: ["campaign manager", "social media advertising manager"],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#eeeeee",
        color: "#000",
        fontFamily: "Source Code Pro",
      }}
      contentArrowStyle={{ borderRight: "10px solid #eeeeee" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, backgroundColor: "white" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            width={60}
            src={experience.icon}
            alt={experience.company_name}
            style={{ borderRadius: "20vmax" }}
          />
        </div>
      }
    >
      <div>
        <h3
          className="text-black text-[24px] font-bold "
          style={{ fontWeight: "bold" }}
        >
          {experience.title}
        </h3>
        <p
          className="text-black text-[16px] font-semibold "
          style={{ margin: 0, fontWeight: "bold" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <h1 className="bacground-title" id="id-work">
        Experience
      </h1>
      <motion.div variants={textVariant()}></motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
