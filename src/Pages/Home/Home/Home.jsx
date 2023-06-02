import { Helmet } from "react-helmet-async";
import Contact from "../../../Cmponents/Contact/Contact";
import MBanner from "../../../Cmponents/mBanner/mBanner";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Feature from "../Feature/Feature";
import Menu from "../Menu/Menu";
import OrderOnline from "../Order/OrderOnline";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS </title>
            </Helmet>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <MBanner></MBanner>
      
            <Menu></Menu>
            <Contact></Contact>
            <ChefRecommends></ChefRecommends>
            <Feature></Feature>
            <Testimonials></Testimonials>
        </div>

    );
};

export default Home;