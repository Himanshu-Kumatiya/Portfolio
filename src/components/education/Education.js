import React from 'react'
import './education.css'
import { IoMdSchool } from "react-icons/io";
import { motion } from 'framer-motion';
export const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>
      <div className='timeline'>
        <div className='ed-container left-container'>
          <a className='' href='https://mnemonicconventschool.com/' target="_blank" rel="noreferrer">
            <IoMdSchool />
          </a>
          <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.7}} className='text-box'>
            <h2>10th</h2>
            <small>2015-2016</small>
            <p>I completed my 10th from Mnemonic convent School, Haldwani and I secured 10 cgpa </p>
            <span className='left-container-arrow'></span>
          </motion.div>
        </div>
        <div className='ed-container right-container'>
          <a className='' href='https://mnemonicconventschool.com/' target="_blank" rel="noreferrer">
            <IoMdSchool />
          </a>
          <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.8}}
         className='text-box'>
            <h2>12th</h2>
            <small>2017-2018</small>
            <p>I completed my 12th from Mnemonic convent School, Haldwani and I secured 76% </p>
            <span className='right-container-arrow'></span>
          </motion.div>
        </div>
        <div className='ed-container left-container'>
          <a className='' href='https://amrapali.ac.in/' target="_blank" rel="noreferrer">
            <IoMdSchool />
          </a>
          <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.9}} className='text-box'>
            <h2>Under-graduation</h2>
            <small>2019-2022</small>
            <p>I completed my undergraduation in BCA from Amrapali Group of Institute, Haldwani and I secured 78% </p>
            <span className='left-container-arrow'></span>
          </motion.div>
        </div>
        <div className='ed-container right-container'>
          <a className='' href='https://nitrr.ac.in/' target="_blank" rel="noreferrer">
            <IoMdSchool />
          </a>
          <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}} className='text-box'>
            <h2>Post-graduation</h2>
            <small>2022-2025</small>
            <p>I am pursuing my postgraduation in MCA from National Institute, Raipur and have secured 8.18 cgpa </p>
            <span className='right-container-arrow'></span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
