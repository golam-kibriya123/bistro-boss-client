
const SectionHeader = ({ sub, main }) => {
    return (
        <div className="section-header text-center mb-12">
            <h1 className="text-[rgba(217,153,4,1)] italic md:text-xl ">{sub}</h1>
            <div className=" my-10">
                <h1 className="border-4 border-[#E8E8E8] border-l-0 border-r-0 py-5 px-20 inline md:text-4xl text-2xl">{main}</h1>
            </div>
        </div>
    );
};

export default SectionHeader;