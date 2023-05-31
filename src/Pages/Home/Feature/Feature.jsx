import { Link } from "react-router-dom";
import SectionHeader from "../../../Cmponents/SectionHeader/SectionHeader";
import feature from '../../../assets/home/featured.jpg'

const Feature = () => {
    return (
        <div className="mt-32 bg-feature bg-cover bg-center bg-no-repeat py-32">
            <SectionHeader
                sub={"---Check it out---"}
                main={"FROM OUR MENU"}
                color={'white'}>

            </SectionHeader>
            <div className="flex flex-col md:flex-row items-center mx-auto w-[70%] gap-16 text-white pt-12">
                <img src={feature} alt="" className="w-full md:w-[50%]" />
                <div className="w-full md:w-[50%]   flex flex-col gap-6  items-start">


                    <p className="flex flex-col gap-1">
                        <span className="text-xl"> March 20, 202</span>
                        <span className="text-md uppercase"> WHERE CAN I GET SOME?</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <Link className="uppercase px-8 py-4 text-xl  border-b-2 border-[#ffff] rounded-lg ">read more</Link>
                </div>
            </div>
        </div>
    );
};

export default Feature;