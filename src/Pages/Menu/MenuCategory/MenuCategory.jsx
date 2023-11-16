import Cover from "../../../Shard/Cover/Cover";
import MenuItem from "../../../Shard/MenuItem/MenuItem";


const MenuCategory = ({items, titel, p, img}) => {
    return (
        <div className="pt-8">
           {titel && <Cover img={img} titel={titel} p={p}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 my-16">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;