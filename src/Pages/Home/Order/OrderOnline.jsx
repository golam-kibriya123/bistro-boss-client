import SectionHeader from "../../../Cmponents/SectionHeader/SectionHeader";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import './Order.css'

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'

const OrderOnline = () => {
    return (
        <div className="w-full mt-24 " >

            <SectionHeader
                sub={`---From 11:00am to 10:00pm---`}
                main={`ORDER ONLINE`}
            ></SectionHeader>

            <div className="mx-auto ">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    freeMode={true}

                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;