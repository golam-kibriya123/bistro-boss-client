
const ItemCard = ({ item }) => {
    const { price, image, recipe, name } = item;

    return (
        <div className="flex flex-row justify-center items-center space-x-3 text-[#737373]">
            <img src={image} alt="" className="w-[118px] h-[104px] me-8" style={{borderRadius:' 0px 200px 200px 200px'}} />
            <div>
                <h1>{name}------------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] mb-[70px]">${price}</p>

        </div>
    );
};

export default ItemCard;