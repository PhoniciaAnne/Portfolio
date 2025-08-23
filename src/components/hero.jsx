import { motion } from "framer-motion";
import "./hero.css";
import { styles } from "../styles";
import { ComputersCanvas,EarthCanvas } from "./canvas";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full text-blue-400' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#918e8e]'>
              <Typewriter
                options={{
                  strings: ['Phonicia Anne', 'Machine Learning Enthusiast','Software Developer.','Entrepreneur','Web Developer.'],
                  autoStart: true,
                  loop: true,
                }}/>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 textCol`}>
            
         I am passionate about applying machine learning, backend engineering, and cloud technologies to design scalable systems, automate workflows <br className='sm:block hidden' />
         , and develop innovative solutions that solve complex real-world challenges.


















          </p>
        </div>
      </div>
      {/* <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
      <EarthCanvas /></div> */}
      <div className="outalt">
      <div className="compalt">
         </div></div>
      {/* <ComputersCanvas /> */}
    
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
