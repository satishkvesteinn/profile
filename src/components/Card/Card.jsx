import { useContext } from 'react';
import { themeContext } from '../../Context/Context';
import './card.css'

const Card = ({ emoji, detail, heading }) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>
      <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Card