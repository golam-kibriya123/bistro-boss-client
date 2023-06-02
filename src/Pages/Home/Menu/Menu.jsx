
import SectionHeader from "../../../Cmponents/SectionHeader/SectionHeader";
import useMenu from "../../../Hooks/useMenu";
import ItemCard from "../../../Cmponents/ItemCard/ItemCard";


const Menu = () => {


    const [menu] = useMenu();
    const popular = menu.filter(menuItem => menuItem.category === 'popular')



    return (
        <div className="mt-20">
            <div className="mb-32 flex flex-col items-center ">
                <SectionHeader
                    sub={'---Check it out---'}
                    main={'FROM OUR MENU'}
                >
                </SectionHeader>
                <ItemCard
                    category={popular}
                    btn_all={true}
                >

                </ItemCard>

            </div>


        </div>
    );
};

export default Menu;