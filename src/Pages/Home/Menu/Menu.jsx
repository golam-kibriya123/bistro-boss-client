import { useEffect, useState } from "react";
import SectionHeader from "../../../Cmponents/SectionHeader/SectionHeader";
import ItemCard from "../../../Cmponents/ItemCard/ItemCard";
import { Link } from "react-router-dom";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular');
                setMenu(popularItem)
            })
    }
        , [])
    return (
        <div className="mb-32 flex flex-col items-center">
            <SectionHeader
                sub={'---Check it out---'}
                main={'FROM OUR MENU'}
            >
            </SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 mb-12" >
                {menu.map(item => <ItemCard
                    key={item._id}
                    item={item}>
                </ItemCard>)}
            </div>
            <Link className="border-b-2 border-[#1F2937] rounded-lg py-5 px-7 text-[#1F2937 ] ">View Full  Menu</Link>
        </div>
    );
};

export default Menu;