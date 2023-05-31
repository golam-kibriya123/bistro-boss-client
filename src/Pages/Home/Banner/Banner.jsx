import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slImg1 from '../../../assets/home/01.jpg'
import slImg2 from '../../../assets/home/02.jpg'
import slImg3 from '../../../assets/home/03.png'
import slImg4 from '../../../assets/home/04.jpg'
import slImg5 from '../../../assets/home/05.png'
import slImg6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={slImg1} />
            </div>
            <div>
                <img src={slImg2} />
            </div>
            <div>
                <img src={slImg3} />
            </div>
            <div>
                <img src={slImg4} />
            </div>
            <div>
                <img src={slImg5} />
            </div>
            <div>
                <img src={slImg6} />
            </div>
        </Carousel>
    );
};

export default Banner;