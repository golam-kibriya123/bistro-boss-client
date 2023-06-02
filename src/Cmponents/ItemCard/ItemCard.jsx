import { Link } from "react-router-dom";


const ItemCard = ({ category, btn_all, btn_favorite, title }) => {


    return (<>

        <div className="my-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 " >
                {category.map(item => {
                    const { price, image, recipe, name } = item;

                    return (<>
                        <div className="flex flex-row justify-center items-center space-x-3 text-[#737373]" >
                            <img src={image} alt="" className="w-[118px] h-[104px] me-8 border border-black" style={{ borderRadius: ' 0px 200px 200px 200px' }} />
                            <div>
                                <h1>{name}------------------</h1>
                                <p>{recipe}</p>
                            </div>
                            <p className="text-[#BB8506] mb-[70px]">${price}</p>

                        </div>

                    </>)

                })}

            </div>
            <div className={`${btn_all ? 'flex ' : 'hidden'} flex-xol items-center justify-center `}>
                <Link className="py-3 md:px-6 px-3 border-b-2  border-[#1F2937] mt-5 mb-10 rounded-lg nd:text-xl uppercase" >View Full  Menu</Link>

            </div>
            <div className={`${btn_favorite ? 'flex' : 'hidden'} flex-xol items-center justify-center `}>
                <Link to={`/shop/${title}`} className="py-3 md:px-6 px-3 border-b-2  border-[#1F2937] mt-5 mb-10 rounded-lg nd:text-xl uppercase" >ORDER YOUR favorite FOOD</Link>

            </div>



        </div >


    </>)



};

export default ItemCard;