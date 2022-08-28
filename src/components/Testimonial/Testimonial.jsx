import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProfileImage1 from '../../img/profile1.jpg'
import ProfileImage2 from '../../img/profile2.jpg'
import ProfileImage3 from '../../img/profile3.jpg'
import ProfileImage4 from '../../img/profile4.jpg'
import ProfileImage5 from '../../img/profile5.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {

    const client = [
        {
            img: ProfileImage1,
            review: "Note, Swiper React component will create required elements for Navigation, Pagination and Scrollbar if you pass these params without specifying its elements"
        },

        {
            img: ProfileImage2,
            review: "Note, Swiper React component will create required elements for Navigation, Pagination and Scrollbar if you pass these params without specifying its elements"
        },

        {
            img: ProfileImage3,
            review: "Note, Swiper React component will create required elements for Navigation, Pagination and Scrollbar if you pass these params without specifying its elements"
        },

        {
            img: ProfileImage4,
            review: "Note, Swiper React component will create required elements for Navigation, Pagination and Scrollbar if you pass these params without specifying its elements"
        },

        {
            img: ProfileImage5,
            review: "Note, Swiper React component will create required elements for Navigation, Pagination and Scrollbar if you pass these params without specifying its elements"
        },
    ]

    return (
        <div className="t-wrapper" id='testimonials'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>

            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                slidesPerView={1}
            >

                {
                    client.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                    <img src={item.img} alt="" />
                                    <span>{item.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Testimonial