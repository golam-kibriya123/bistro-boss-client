import { Parallax } from 'react-parallax';
const CoverBanner = ({ img, fixed, title, sub_title }) => {
    return (

        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-300}
        >
            <div className={`hero min-h-screen ${fixed && ''} `} >
                <div className="hero-content text-center text-neutral-content w-[80%] ">
                    <div className=" bg-[#15151581] py-24 w-full uppercase">
                        <h1 className="mb-5 text-3xl md:text-7xl font-bold">{title}</h1>
                        <p className="mb-5">{sub_title} </p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default CoverBanner;