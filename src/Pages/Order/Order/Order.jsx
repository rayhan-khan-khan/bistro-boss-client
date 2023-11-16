import { useState } from "react";
import Cover from "../../../Shard/Cover/Cover";
import orderImage from "../../../assets/shop/order.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover  img={orderImage} titel="Order Food" p="Would you like to try a dish?"></Cover>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
            <TabList>
            <Tab>Salat</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
           </TabList>
           <TabPanel>
             <OrderTab items={salad}></OrderTab>
           </TabPanel>
           <TabPanel>
           <OrderTab items={pizza}></OrderTab>
           </TabPanel>
           <TabPanel> <OrderTab items={soups}></OrderTab></TabPanel>
           <TabPanel><OrderTab items={desserts}></OrderTab></TabPanel>
           <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
        </Tabs>
        </div>
    );
};

export default Order;