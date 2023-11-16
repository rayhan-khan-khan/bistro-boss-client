
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../../Shard/MenuItem/MenuItem";
import useMenu from "../../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
   
    return (
        <section className="mb-12 ">
            <SectionTitle
            subHeading="---Check it out---" 
            heading="FROM OUR ITEMS"
            >    
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
            <button className="btn btn-outline  border-0 mt-6 border-b-4 mt-2 ">View Fulll</button>
            </div>
        </section>
    );
};

export default PopularMenu;