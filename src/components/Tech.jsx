import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "./Tech.css";
const ServiceCard = ({ index, title, icon }) => (
  <div className="class"><Tilt className='xs:w-[150px] w-full    '>
    {/* <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    > */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='glassbg  class  py-5 px-12 min-h-[150px]  flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain'
        />
      </div>
    {/* </motion.div> */}
  </Tilt></div>
);

const Tech = () => {
  return (
    <div>
      
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (
        
        <div className='w-38 h-38' key={technology.name}>
          <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
      >
          <ServiceCard key={technology.name} title={technology.name} icon={technology.icon} />
          </motion.div>
        </div>
        
      ))}
    </div>
    
    </div>
  );
};

export default SectionWrapper(Tech, "");
