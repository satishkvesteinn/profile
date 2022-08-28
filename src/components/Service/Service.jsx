import './service.css';
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'

const Service = () => {

    const transition = { duration: 1, type: "spring" }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="service" id='service'>
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>services</span>
                <span>
                  I have learned all the skills from youtube
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <motion.div  initial={{ left: "25rem"}}
                    whileInView={{ left: "13rem" }}
                    transition={transition}
                    style={{ left: "14rem" }}>
                    <Card
                        emoji={Heartemoji}
                        heading={"Front end developer"}
                        detail={"HTML, CSS, JavaScript, React, Fetch Api integiration"}
                    />
                </motion.div>

                <motion.div  initial={{ left: "-15rem" }}
                    whileInView={{ left: "-5rem" }}
                    transition={transition} style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={"Backend developer"}
                        detail={"Node js, Express js, MongoDb, Build APIs"}
                    />
                </motion.div>

                <motion.div  initial={{ left: "25rem"}}
                    whileInView={{ left: "12rem" }}
                    transition={transition} style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={"Tools"}
                        detail={"Bootstrap, JQuery, MaterialUI, Github, Font Awesome"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Service