import React, { useState } from 'react';
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";
import { FaDiagramProject } from "react-icons/fa6";
export const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
        <a href='#' 
        className={activeNav==='#'?'active':''}
        onClick={()=>setActiveNav('#')} 
        ><FaHome /></a>
        <a href='#about'
        className={activeNav==='#about'?'active':''}
        onClick={()=>setActiveNav('#about')} 
        ><FaUser /></a>
        <a href='#education'
        className={activeNav==='#education'?'active':''}
        onClick={()=>setActiveNav('#education')} 
        ><LuSchool /></a>
        <a href='#skills'
        className={activeNav==='#skills'?'active':''}
        onClick={()=>setActiveNav('#skills')} 
        ><GiSkills /></a>
        <a href='#projects'
        className={activeNav==='#projects'?'active':''}
        onClick={()=>setActiveNav('#projects')} 
        ><FaDiagramProject /></a>
        <a href="#contact"
        className={activeNav==='#contact'?'active':''}
        onClick={()=>setActiveNav('#contact')} ><TiContacts /></a>
    </nav>
  )
}
