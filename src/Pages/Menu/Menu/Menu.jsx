import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shard/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupsImage from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
               <title>Bistro Boss | Menu</title>
             </Helmet>
             <Cover img={menuImage} titel='OUR MENU' p='Would you like to try a dish?'></Cover>
             {/* main cover */}
             <SectionTitle subHeading='---Don not miss---' heading='TODAY iS OFFER'></SectionTitle>
             {/* offered menu items */}
             <MenuCategory items={offered}></MenuCategory>
             {/* dessert menu items */}
                <MenuCategory
                items={desserts}  titel="desserts" img={dessertImage}
                ></MenuCategory>
                {/* Pizza menu items */}
                   <MenuCategory items={pizza} titel="pizza" img={pizzaImage}
                ></MenuCategory>
                {/* Salad menu items */}
                   <MenuCategory items={salad} titel="salad" img={saladImage}
                ></MenuCategory>
                {/* Soups menu items */}
                   <MenuCategory items={soup} titel="soup" img={soupsImage}
                ></MenuCategory>
                
        </div>
    );
};

export default Menu;