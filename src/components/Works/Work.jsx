import './work.css';
import Amazon from '../../img/amazon.png'
import Upwork from '../../img/upwork.png'
import Facebook from '../../img/facebook.png'
import Shopify from '../../img/shopify.png'
import Fiverr from '../../img/fiverr.png'
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion';

const Work = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="work">
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
                <span>Brand & Clients</span>
                <span>
                    Just for demo purpose
                </span>
                <Link spy={true} to="contact" smooth={true}>
                    <button className="button s-button">Hire me</button>
                </Link>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="w-right">
                <motion.div 
                initial={{rotate: 45}}
                whileInView={{rotate: 0}}
                viewport={{margin: '-40px'}}
                transition={{duration: 3.5, type: "spring"}}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Work