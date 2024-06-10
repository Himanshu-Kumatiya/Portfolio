import React from 'react';
//import { Link } from 'react-router-dom';
import { TiContacts } from "react-icons/ti";
import { TiHomeOutline } from "react-icons/ti";
import { MdMenuBook } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import "./css/navigation.css"
export const Navbar = () => {
    return (
        <div className='navbar'>
        <div className='navigation'>
            <ul>
                <li className='list'>
                    <a href="/">
                        <span className='icon'>
                            <TiHomeOutline />    
                        </span>
                        <span className='text'>Home</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="/education">
                        <span className='icon'>
                            <MdMenuBook />
                        </span>
                        <span className='text'>Education</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="/skills">
                        <span className='icon'>
                            <GiSkills />
                        </span>
                        <span className='text'>Skills</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="/projects">
                        <span className='icon'>
                            <GrProjects />
                        </span>
                        <span className='text'>Projects</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="/contact">
                        <span className='icon'>
                            <TiContacts />
                        </span>
                        <span className='text'>Query</span>
                    </a>
                </li>
                <div className='indicator'></div>
            </ul>
        </div>
        </div>
    )
}
// import React from 'react';
// import photo from "../assests/photo.jpg";
// import "./pages-css/pages.css";
// import { FaLinkedinIn } from "react-icons/fa";
// import { Typewriter } from 'react-simple-typewriter';
// import { MdOutlineEmail } from "react-icons/md";
// import { RiTwitterXFill } from "react-icons/ri";
// import { FaInstagramSquare } from "react-icons/fa";
// export const Home = () => {

//   return (
//     <div className='home-container'>
//       {/* <p className='header-title'>
//             Portfolio
//         </p> */}
//       <div className='home'>
//         <img className='profile-img' src={photo} alt="himanshu" />
//         <div className='home-content'>
//           <p className='content-name'>
//           <h1 className='dash'></h1>
//           <h1>I'm Himanshu kumatiya</h1>
//           </p>
//           <p className='iam' >
//             I'm a {' '}
//             <span >
//               <Typewriter
//                 words={['Frontend developer', 'Backend developer', 'Learner', 'Coder']}
//                 loop
//                 cursor
//                 cursorStyle='_'
//                 typeSpeed={70}
//                 deleteSpeed={50}
//               />
//             </span>
//           </p>
//           <div className='social'>
//             <FaLinkedinIn className='social-acc lin' />
//             <MdOutlineEmail className='social-acc mail' />
//             <RiTwitterXFill className='social-acc x' />
//             <FaInstagramSquare className='social-acc insta' />
//           </div>
//           <button className='resume'>Resume</button>
//         </div>
//       </div>
//     </div>
//   )
// }
