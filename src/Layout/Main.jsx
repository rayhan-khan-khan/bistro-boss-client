import { Outlet } from "react-router-dom";
import Footer from "../Shard/Footer/Footer";
import NavBar from "../Shard/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;