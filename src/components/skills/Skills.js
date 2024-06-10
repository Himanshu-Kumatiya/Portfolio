import React, { useRef } from 'react';
import './skill.css';
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";


export const Skills = () => {
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
  const ref=useRef(null);
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["0 3","1.33 1"]
  })
  return (
    <div id='skills'>
    <motion.section variants={variants} initial="initial" whileInView="animate"
    >
      <motion.h5 variants={variants} >What Skills I have</motion.h5>
      <motion.h2 variants={variants} >Technology</motion.h2>
      <div className='experience_container'>
        <motion.div ref={ref} 
    style={{
      scale:scrollYProgress,
      opacity:scrollYProgress
    }}className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <div >
                <FaHtml5 />
              </div>
              <h4>HTML</h4>
            </article>
            <article className='experience_details'>
              <div >
                <IoLogoCss3 />
              </div>
              <h4>CSS</h4>
            </article>
            <article className='experience_details'>
              <div >
                <TbBrandJavascript />
              </div>
              <h4>Javascript</h4>
            </article>
            <article className='experience_details'>
              <div >
                <FaBootstrap />
              </div>
              <h4>Bootstrap</h4>
            </article>
            <article className='experience_details'>
              <div >
                <RiTailwindCssFill />
              </div>
              <h4>Tailwind</h4>
            </article>
            <article className='experience_details'>
              <div >
                <FaReact />
              </div>
              <h4>React</h4>
            </article>
          </div>
        </motion.div >
        <motion.div ref={ref} 
        style={{
          scale:scrollYProgress,
          opacity:scrollYProgress
        }} className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <div >
                <FaNodeJs />
              </div>
              <h4>Node JS</h4>
            </article>
            <article className='experience_details'>
              <div >
                <SiExpress />
              </div>
              <h4>Express</h4>
            </article>
            <article className='experience_details'>
              <div >
                <DiMongodb />
              </div>
              <h4>MongoDB</h4>
            </article>
            <article className='experience_details'>
              <div >
                <SiMysql />
              </div>
              <h4>Mysql</h4>
            </article>

          </div>

        </motion.div>
        <motion.div ref={ref} 
    style={{
      scale:scrollYProgress,
      opacity:scrollYProgress
    }} className='miscellaneous'>
          <h3>Miscellaneous</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <div >
                <FaGithub />
              </div>
              <h4>Github</h4>
            </article>
            <article className='experience_details'>
              <div >
                <FaDocker />
              </div>
              <h4>Docker</h4>
            </article>
            <article className='experience_details'>
              <div >
                <FaHtml5 />
              </div>
              <h4>C++</h4>
            </article>
            <article className='experience_details'>
              <div >
                <FaPython />
              </div>
              <h4>Python</h4>
            </article>
            <article className='experience_details'>
              <div >
                <FaJava />
              </div>
              <h4>Java</h4>
            </article>

          </div>

        </motion.div>
      </div>
    </motion.section>
    </div>
  )
}
