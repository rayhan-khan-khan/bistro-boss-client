import { Link } from "react-router-dom";
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
            <Link to={`/order/${titel}`}>
            <button className="btn btn-outline border-0 border-b-8 mt-4 text-orange-600">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;