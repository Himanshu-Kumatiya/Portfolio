import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './header.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Cv from "../../assests/Resume-Himanshu.pdf"
import photo from "../../assests/beach.jpg"
export const Header = () => {
    return (
        <header id='home' className='container'>
            <div className=" header__container">
                <div className='header-content'>
                    <h2>Hello I'm</h2>
                    <h1>Himanshu kumatiya</h1>
                    <h3 className='text-light'>
                        <Typewriter
                            words={['Frontend developer', 'Backend developer', 'Data enthusiast']}
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                        />
                    </h3>
                    <div className='header-social'>
                        <a href='https://www.linkedin.com/in/himanshu-kumatiya/' target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>

                        <a href='mailto:kumatiya123@gmail.com' target="_blank" rel="noreferrer">
                            <MdOutlineMailOutline />
                        </a>
                        <a href='https://github.com/Himanshu-Kumatiya' target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>

                    </div>
                    <div>
                        <a href={Cv} download className='btn'>Download CV</a>
                        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                    </div>
                </div>
                <div className='color_block'></div>
                <div className='me'>
                    <img src={photo} alt='himanshu' />
                </div>


            </div>
            <a href="#contact" className='scroll_down'>Scroll down</a>

        </header>
    )
}
