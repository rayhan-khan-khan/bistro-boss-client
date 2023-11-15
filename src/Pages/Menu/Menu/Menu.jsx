import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shard/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
               <title>Bistro Boss | Menu</title>
             </Helmet>
                <Cover img={menuImage}></Cover>
            <p>menu meodslfsdlfj</p>
        </div>
    );
};

export default Menu;