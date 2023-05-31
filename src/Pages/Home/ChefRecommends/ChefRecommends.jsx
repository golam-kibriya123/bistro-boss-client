import { useState } from "react";
import ChefRecommend from "../../../Cmponents/ChefRecommend/ChefRecommend";
import SectionHeader from "../../../Cmponents/SectionHeader/SectionHeader";

const ChefRecommends = () => {
    const [recommends, setRecommends] = useState([]);
    fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const chefRecommend = data.filter(item => item.category === 'popular');
            setRecommends(chefRecommend)

        })
    return (
        <div>
            <SectionHeader
                sub={'---Should Try---'}
                main={'CHEF RECOMMENDS'}>

            </SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 ">
                {
                    recommends.map(recommend => <ChefRecommend
                        key={recommend._id}
                        recommend={recommend}
                    >
                    </ChefRecommend>)
                }
            </div>
        </div >
    );
};

export default ChefRecommends;