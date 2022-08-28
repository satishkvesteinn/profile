import Toggle from '../Toggle/Toggle';
import './navbar.css';
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Portfolio</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li><Link spy={true} to='navbar' smooth={true} activeClass="activeClass">
                            Home
                        </Link></li>

                        <li><Link spy={true} to="service" smooth={true}>
                            Services
                        </Link></li>

                        <li><Link spy={true} to="experience" smooth={true}>
                            Experience
                        </Link></li>

                        <li><Link spy={true} to="portfolio" smooth={true}>
                            Porfolio
                        </Link></li>

                        <li><Link spy={true} to="testimonials" smooth={true}>
                            Testimonials
                        </Link></li>
                    </ul>
                </div>
                <Link spy={true} to="contact" smooth={true}>
                    <button className="button n-button">
                        Contact
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Navbar