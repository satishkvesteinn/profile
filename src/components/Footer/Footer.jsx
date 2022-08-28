import './footer.css';
import Wave from '../../img/wave.png';
// import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Git from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%", height: "100%" }} />
            <div className="f-content">
                <span><b>Email : </b>satishkvestein@gmail.com</span>
                <div className="f-icons">
                    <a href="https://github.com/satishkvesteinn" target="_blank" rel="noopener noreferrer">
                        <Git color="white" size="3rem"></Git>
                    </a>
                    <a href="https://www.linkedin.com/in/satish-vishwakarma-24a5911bb/" target="_blank" rel="noopener noreferrer">
                        <Linkedin color="white" size="3rem"></Linkedin>
                    </a>
                    {/* <a href="https://github.com/satishkvesteinn" target="_blank" rel="noopener noreferrer">
                        <Insta color="white" size="3rem"></Insta>
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Footer