import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { achieve } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const AchieveCard = ({ achieve }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={achieve.date}
      iconStyle={{ background: achieve.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={achieve.icon}
            alt={achieve.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{achieve.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {achieve.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {achieve.points.map((point, index) => (
          <li
            key={`achieve-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Achieve = () => {
  return (
    <div id="achievements">
      

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {achieve.map((achieve, index) => (
            <AchieveCard
              key={`achieve-${index}`}
              achieve={achieve}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Achieve, "");
