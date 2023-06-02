import { useState } from "react";
import './Shop.css'
import CoverBanner from "../../Cmponents/Banner/CoverBanner";
import shopBanner from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from "../../Cmponents/FoodCard/FoodCard";
import useMenu from "../../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Shop = () => {
    const category_titles = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
    const { title } = useParams();
    const initialIndex = category_titles.indexOf(title);
    console.log(initialIndex)
    const [index, setIndex] = useState(initialIndex)

    const [menu] = useMenu();
    const newMenu = ['salad'];
    menu.map(item => {
        const category = item.category;
        if (newMenu.includes(category) === false) {
            newMenu.push(category)

        }
    })
    const salad = menu.filter(menuItem => menuItem.category === 'salad')
    const drinks = menu.filter(menuItem => menuItem.category === 'drinks')
    const dessert = menu.filter(menuItem => menuItem.category === 'popular')
    const pizza = menu.filter(menuItem => menuItem.category === 'pizza')
    const soup = menu.filter(menuItem => menuItem.category === 'soup')
    return (
        <div className="">
            <Helmet>
                <title>BISTRO BOSS | SHOP</title>
            </Helmet>
            <CoverBanner
                img={shopBanner}
                title={"OUR SHOP"}
                sub_title={'Would you like to try a dish?'}
            >

            </CoverBanner>

            <div className=" mt-32 mb-12 ">
                <Tabs defaultIndex={index} onSelect={(index) => {
                    setIndex(index)
                }}>
                    <div className=" flex flex-col items-center">
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>pizza</Tab>
                            <Tab>soups</Tab>
                            <Tab>desserts</Tab>
                            <Tab>drinks</Tab>

                        </TabList>
                    </div>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-10">
                            <FoodCard menu={salad}  ></FoodCard>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-10">
                            <FoodCard menu={pizza}  ></FoodCard>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-10">
                            <FoodCard menu={soup}  ></FoodCard>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-10">
                            <FoodCard menu={dessert}  ></FoodCard>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-10">
                            <FoodCard menu={drinks}  ></FoodCard>
                        </div>
                    </TabPanel>


                </Tabs>
            </div>

        </div>
    );
};

export default Shop;