import React from 'react'
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import "./profiles.css";
import {motion} from "framer-motion"
export const Profiles = () => {
    const variants=(duration)=>({
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    })
  return (
    <div className='profiles'>
        <motion.div
        variants={variants(2.5)}
        initial="initial"
        animate="animate"
        className='profile'>
        <a href='https://leetcode.com/u/H_kumatiya/' target="_blank" rel="noreferrer"><TbBrandLeetcode /></a>
        </motion.div>
        <motion.div 
        variants={variants(2)}
        initial="initial"
        animate="animate" className='profile'>
        <a href='https://codeforces.com/profile/Himanshu_kumatiya' target="_blank" rel="noreferrer"><SiCodeforces /></a>
        </motion.div>
        <motion.div 
        variants={variants(2.3)}
        initial="initial"
        animate="animate"
        className='profile'>
        <a href='https://www.codechef.com/users/himanshu_1866' target="_blank" rel="noreferrer"><SiCodechef /></a>
        </motion.div>
        <motion.div
        variants={variants(2.7)}
        initial="initial"
        animate="animate"
         className='profile'>
        <a href='https://www.hackerrank.com/profile/KeepRunning' target="_blank" rel="noreferrer"><FaHackerrank /></a>
        </motion.div>
    </div>
  )
}
