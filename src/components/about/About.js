import React from 'react';
import './about.css'
import me from '../../assests/photo4.jpg';
import {motion} from "framer-motion";
import { Profiles } from '../profiles/Profiles';
export const About = () => {
  const variants = {
    initial: {
      y: 200,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }
  return (
    <div id='about'>
    <motion.section variants={variants} initial="initial" whileInView="animate" >
      <motion.h5 variants={variants}>Get To Know</motion.h5>
      <motion.h2 variants={variants}>About Me</motion.h2>
      <div className='container about_container'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='about_me'>
          <div className='about_me-image'>
            <img src={me} alt='himanshu'/>
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.6}} className='about_content'>
        <p >
          Hello! My name is Himanshu Kumatiya and I hail from the picturesque town of Nainital, nestled in the serene hills of Uttarakhand. Currently, I am pursuing my Master of Computer Applications (MCA) from National Institute of Technology(NIT), Raipur.
          With a firm belief in continuous learning and adaptation, I am excited to embark on this transformative journey, embracing challenges and seizing opportunities along the way.
          Thank you for taking the time to learn a little about me. I look forward to connecting with like-minded individuals and contributing positively to our shared endeavors.
        </p>
        <Profiles/>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </motion.div>
        
      </div>
    </motion.section>
    </div>
  )
}
