import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import "./footer.css"
export const Footer = () => {
  return (

      <div>
    <section id='footer'>
      <a href="#" className='footer_logo'>Himanshu Kumatiya</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/himanshu-kumatiya/' target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href='mailto:kumatiya123@gmail.com' rel="noreferrer">
          <MdOutlineMailOutline />
        </a>
        <a href='https://github.com/Himanshu-Kumatiya' target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className='footer_copyright'>
        <small>&copy;Himanshu kumatiya. All right reserved</small>
      </div>

    </section>
      </div>
  )
}
