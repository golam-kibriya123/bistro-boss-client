import { Helmet } from "react-helmet-async";
import CoverBanner from "../../../Cmponents/Banner/CoverBanner";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import menuImg from '../../../assets/menu/banner3.jpg'
import SectionHeader from "../../../Cmponents/SectionHeader/SectionHeader";
import ItemCard from "../../../Cmponents/ItemCard/ItemCard";
import useMenu from "../../../Hooks/useMenu";
const OurMenu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(menuItem => menuItem.category === 'offered')
    const salad = menu.filter(menuItem => menuItem.category === 'salad')
    const drinks = menu.filter(menuItem => menuItem.category === 'drinks')
    const dessert = menu.filter(menuItem => menuItem.category === 'popular')
    const pizza = menu.filter(menuItem => menuItem.category === 'pizza')
    const soup = menu.filter(menuItem => menuItem.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | MENU</title>
            </Helmet>

            <CoverBanner
                img={menuImg}
                fixed={true}
                title={'our menu'}
                sub_title={'lorem1dfgjhkkd jdshfjk iklsdikjfk'}
            >

            </CoverBanner>
            <div className="my-32">
                <SectionHeader
                    sub={"---Don't miss---"}
                    main={"TODAY'S OFFER"}
                >
                </SectionHeader>

            </div>



            <ItemCard
                category={offered}
                btn_favorite={true}
            ></ItemCard>


            <CoverBanner
                img={saladImg}
                fixed={true}
                title={'salad'}
                sub_title={'lorem1dfgjhkkd jdshfjk iklsdikjfk'}
            ></CoverBanner>
            <ItemCard
                title={'salad'}

                category={salad}
                btn_favorite={true}></ItemCard>


            <CoverBanner
                img={soupImg}
                fixed={true}
                title={'drinks'}
                sub_title={'lorem1dfgjhkkd jdshfjk iklsdikjfk'}
            > </CoverBanner>
            <ItemCard
                category={drinks}
                title={'drinks'}

                btn_favorite={true}
            ></ItemCard>


            <CoverBanner
                img={dessertImg}
                fixed={true}
                title={'dessert'}
                sub_title={'lorem1dfgjhkkd jdshfjk iklsdikjfk'}
            > </CoverBanner>
            <ItemCard
                title={'dessert'}

                category={dessert}
                btn_favorite={true}
            ></ItemCard>


            <CoverBanner
                img={pizzaImg}
                fixed={true}
                title={'pizza'}
                sub_title={'lorem1dfgjhkkd jdshfjk iklsdikjfk'}
            ></CoverBanner>
            <ItemCard
                title={'pizza'}

                category={pizza}
                btn_favorite={true}
            ></ItemCard>


            <CoverBanner
                img={soupImg}
                fixed={true}
                title={'soup'}
                sub_title={'lorem1dfgjhkkd jdshfjk iklsdikjfk'}
            > </CoverBanner>
            <ItemCard
                title={'soup'}

                category={soup}
                btn_favorite={true}
            ></ItemCard>


        </div>
    );
};

export default OurMenu;