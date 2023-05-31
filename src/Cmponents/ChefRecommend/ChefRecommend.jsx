
const ChefRecommend = ({ recommend }) => {
    const { name, image, recipe } = recommend
    return (
        <div className="card  bg-[#F3F3F3] rounded-none mx-auto text-center">
            <figure className="w-full">
                <img src={image} className="w-full "/>
                </figure>
            <div className="card-body ">
                <h2 className="text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="px-8 py-4 text-xl  uppercase mx-auto text-[#BB8506] bg-[#E8E8E8] border-b-2 border-[#BB8506] rounded-lg focus:bg-black focus:border-black hover:bg-black hover:border-black">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommend;