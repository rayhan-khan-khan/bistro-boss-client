
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import Callus from "./Callus/Callus";
import Category from "./Category/Category";
import Chef from "./Chef/Chef";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";




const Home = () => {
    return (
        <div>
             <Helmet>
               <title>Bistro Boss | Home</title>
             </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <Callus></Callus>
            <Chef></Chef>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;