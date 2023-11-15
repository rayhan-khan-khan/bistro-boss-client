import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../../Shard/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)})
    },[])
    return (
        <section className="mb-12 text-center">
            <SectionTitle
            subHeading="---Check it out---" 
            heading="FROM OUR ITEMS"
            >    
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 mt-6 border-b-4 mt-2 ">View Fulll</button>
        </section>
    );
};

export default PopularMenu;