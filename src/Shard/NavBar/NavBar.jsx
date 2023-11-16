import { Link } from "react-router-dom";


const NavBar = () => {
    const navOptions = <>
    <ul className="text-white flex">
    <li><Link className=" font-bold " to='/'>Home</Link> </li>
    <li><Link className=" font-bold" to='/menu'>Out Menu</Link> </li>
    <li><Link className=" font-bold" to='/order'>Order Food</Link> </li>
    </ul>
    </>
    return (
        <>
                    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {navOptions}
            </ul>
            </div>
           <h1 className="block text-white">
          <p className="font-semibold text-xl">BISTRO BOSS</p>
          <p className="font-semibold text-xl">R e s t a u r a n t</p>
           </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
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