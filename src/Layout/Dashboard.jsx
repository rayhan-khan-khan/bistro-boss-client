import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashbord side bar */}
            <div className="w-64 min-h-screen p-4 bg-orange-400">
               <ul className="menu  space-y-4 p-4">

                  <li><NavLink to="/dashboard/userHome">
                    <FaHome className="text-2xl"></FaHome>
                     User Home</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/reservation">
                    <FaCalendar className="text-2xl"></FaCalendar>
                     Reservation</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/cart">
                    <FaShoppingCart className="text-2xl"></FaShoppingCart>
                     My Cart</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/review">
                    <FaAd className="text-2xl"></FaAd>
                     Review</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/bookings">
                      <FaList className="text-2xl"></FaList>
                     My Bookings</NavLink>
                  </li>
                  <div className="divider"></div>
                  <li><NavLink to="/">
                    <FaHome className="text-2xl"></FaHome>
                     Home</NavLink>
                  </li>
                  <li><NavLink to="/order/salat">
                    <FaSearch></FaSearch>
                     Menu</NavLink>
                  </li>
               </ul>
            </div>
            <div className="flex1">
                {/* dashboard contant */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;