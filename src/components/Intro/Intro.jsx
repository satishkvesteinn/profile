import './intro.css';
import Github from '../../img/github.png'
// import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import Floating from '../Floating/Floating';
import { useContext } from 'react';
import { themeContext } from '../../Context/Context';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion'
import React from 'react';

const Intro = () => {

    const transition = { duration: 2, type: "spring" }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro" id='navbar'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Satish kumar</span>
                    <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
                    <span>I have learned all the skills from YouTube</span>
                </div>
                <Link spy={true} to="contact" smooth={true}>
                    <div className="button i-button">Hire me</div>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/satishkvesteinn" target="_blank" rel="noopener noreferrer"> <img src={Github} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/satish-vishwakarma-24a5911bb" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin" /></a>
                    {/* <a href="https:www.google.com" rel="noopener noreferrer" target="_blank"><img src={Instagram} alt="Instagram" /></a> */}
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={Glassesimoji} alt=""
                />

                {/* <img src={Glassesimoji} alt="" /> */}

                <motion.div initial={{ left: "100%", top: "-4%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    src={Glassesimoji} alt="" style={{ color: darkMode ? "black" : "", top: "-4%", left: "68%" }} className="floatingDiv">
                    <Floating image={Crown} text1="Web" text2="Developer" />
                </motion.div>
                <motion.div initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition} style={{ color: darkMode ? "black" : "", top: "18rem", left: "0rem" }} className="floatingDiv">
                    <Floating image={Thumbup} text1="Best Design" text2="Projects" />
                </motion.div>

                {/* Blur div */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur' style={{ background: "#C1F5FF", top: "17rem", left: "-9rem", width: "21rem", height: "11rem" }}></div>
            </div>
        </div>
    )
}

export default Intro