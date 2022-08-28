import { useContext } from 'react';
import { themeContext } from '../../Context/Context';
import './experience.css'

const Experience = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="experience" id='experience'>
            <div className="achievment">
                <div className="circle" style={{ color: darkMode ? "black" : "" }}>0+</div>
                <span>years</span>
                <span>Experience</span>
            </div>

            <div className="achievment">
                <div className="circle" style={{ color: darkMode ? "black" : "" }}>6+</div>
                <span>completed</span>
                <span>Projects</span>
            </div>

            <div className="achievment">
                <div className="circle" style={{ color: darkMode ? "black" : "" }}>0+</div>
                <span>companies</span>
                <span>Work</span>
            </div>
        </div>
    )
}

export default Experience