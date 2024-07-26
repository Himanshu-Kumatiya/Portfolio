import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import woodhill from "../../assests/Woodhill.png"
import BlogPost from "../../assests/BlogPost.png"
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiCloudinary } from "react-icons/si";
import knowledgeGrasp from "../../assests/KnowledgeGrasp.png"
const items = [
  {
    id: 1,
    title: "KnowledgeGrasp",
    img: knowledgeGrasp,
    link:"",
    code:"https://github.com/Himanshu-Kumatiya/KnowledgeGrasp",
    desc: "KnowledgeGrasp, dedicated to transforming education through innovative technology solutions.",
  },
  {
    id: 2,
    title: "Woodhill",
    code:"https://github.com/Himanshu-Kumatiya/Woodhill-Hotel-Restaurant",
    link:"",
    img: woodhill,
    desc: "Woodhill Hotel and Restaurant, seeks to bridge the gap between discerning travelers and quality accommodations and dining experiences.",
  },
  {
    id: 3,
    title: "BlogPost",
    code:"https://github.com/Himanshu-Kumatiya/BlogPost",
    img: BlogPost,
    link:"https://blogpost-2.onrender.com/",
    desc: " BlogPost is a community of passionate writers, thinkers, and creators who believe in the power of words to inspire, inform, and connect people from all walks of life.",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div >
              <FaReact style={{marginLeft:"20px",fontSize:"30px"}}/>
              <FaNode style={{marginLeft:"20px",fontSize:"30px"}} />
              <SiExpress style={{marginLeft:"20px",fontSize:"30px"}}/>
              <DiMongodb style={{marginLeft:"20px",fontSize:"30px"}}/>
              <SiCloudinary style={{marginLeft:"20px",fontSize:"30px"}}/>
              
            </div>
            <div >
            <a href={item.code} target="_blank">Source</a>
            <a style={{marginLeft:"30px"}} target="_blank" href={item.link}>Demo</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" id="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

