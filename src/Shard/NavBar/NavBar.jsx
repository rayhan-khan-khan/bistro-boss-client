import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    const navOptions = <>
   
    <li><Link className=" font-bold " to='/'>Home</Link> </li>
    <li><Link className=" font-bold" to='/menu'>Out Menu</Link> </li>
    <li><Link className=" font-bold" to='/order/salad'>Order Food</Link> </li>
    <li><Link className=" font-bold" to='/secret'>Secret</Link> </li>
    <li>
        <Link to="/dashboard/cart">
             <button className="btn">
              <FaShoppingCart className="mr-2"></FaShoppingCart>
             <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link>
    </li>
    {
        user ? <>
        {/* <span>{user?.displayName}</span> */}
        <button onClick={handleLogOut} className="btn font-bold btn-active btn-ghost">LogOut</button>
        </> : <>
        <li><Link className=" font-bold" to='/login'>Login</Link> </li>
        </>
    }

  
    </>
    return (
        <>
                    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {navOptions}
            </ul>
            </div>
           <h1 className="block text-white">
          <p className="font-semibold text-xl">BISTRO BOSS</p>
          <p className="font-semibold text-xl">R e s t a u r a n t</p>
           </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center text-white px-1">
              { navOptions}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
        </div>
        </>
    );
};

export default NavBar;