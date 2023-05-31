import SectionHeader from "../../../Cmponents/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";


// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";
import { Navigation } from "swiper";
// rating star
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// react icon
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-32">
            <SectionHeader
                sub={'---What Our Clients Say---'}
                main={'Testimonials'}>

            </SectionHeader>

            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {reviews.map(review => {
                        const { rating, details, name } = review;

                        return (<SwiperSlide key={review._id} >

                            <div className="flex flex-col items-center px-20">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    readOnly
                                    className=" my-5 md:my-10 "
                                />
                                <FaQuoteLeft className="text-3xl md:text-7xl md:mb-10 mb-5" />
                                <p className=" mb-2">{details}</p>
                                <h1 className="text-[#CD9003]">{name}</h1>

                            </div>
                        </SwiperSlide>)
                    })}

                </Swiper>
            </>

        </div>
    );
};

export default Testimonials;