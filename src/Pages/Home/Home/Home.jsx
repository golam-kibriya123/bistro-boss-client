import Contact from "../../../Cmponents/Contact/Contact";
import MBanner from "../../../Cmponents/mBanner/mBanner";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Menu from "../Menu/Menu";
import OrderOnline from "../Order/OrderOnline";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <MBanner></MBanner>
            <Menu></Menu>
            <Contact></Contact>
            <ChefRecommends></ChefRecommends>
        </div>

    );
};

export default Home;