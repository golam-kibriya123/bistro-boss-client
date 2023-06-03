import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';

const NavBar = () => {
    const navItem = <>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/contact'}>CONTACT us</Link>
        </li>
        <li>
            <Link to={'/dashboard'}>DASHBOARD</Link>
        </li>
        <li>
            <Link to={'/menu'}>Our Menu</Link>
        </li>
        <li>
            <Link to={'/shop/salad'}>Our Shop</Link>
        </li>
        <li>
            <Link >SIGN OUT</Link>
        </li>
        <li>
            <Link to={'/login'}>SIGN IN</Link>
        </li>
    </>;
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage='#000'
            bgImageAlt="the dog"
            strength={-300}
        >
            <div className="navbar  fixed z-20 bg-[rgba(21,21,21,.1)] text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 " >
                        {navItem}
                    </ul>
                </div>

            </div>
        </Parallax>

    );
};

export default NavBar;