import './portfolio.css';
import First from '../../img/first.png'
import News from '../../img/news.png'
import Admin from '../../img/admin.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';

const Porfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='portfolio'>
            <span style={{ color: darkMode ? "white" : "" }}>Rrecent Projects</span>
            <span>Porfolio</span>

            <Swiper

                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}

                grabCursor={true}
                className="portfolio-slider"

            >

                <SwiperSlide>
                   <a href="https://satishkvesteinn.github.io/cowinapp/"> <img src={First} alt="" /></a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="https://satishkvesteinn.github.io/adminDashboard/"><img src={Admin} alt="" /></a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="https://satishkvesteinn.github.io/newsapp/"><img src={News} alt="" /></a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Porfolio