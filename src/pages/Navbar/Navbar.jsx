import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/fairy-tales-logo.png'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const { user, handleSignout } = useContext(AuthContext);
    const handleLogout = () => {
        handleSignout();
    };

    const navItems = <>
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/alltoys">All Toys</Link> </li>
        <li> <Link to="/blog">Blog</Link> </li>

        <>
            {user ? (
                <>
                    <li> <Link to="/addtoy">Add A Toy</Link> </li>
                    <li> <Link to="/mytoys">My Toys</Link> </li>
                    {user.photoURL && (
                        <img title={user.displayName}
                            className="h-10 rounded-full border-2 border-primary"
                            src={user?.photoURL}
                            alt=""
                        />
                    )}
                  
                    <button onClick={handleLogout} className="ml-5 btn btn-primary text-white">
                        Logout
                    </button>
                 
                </>
            ) : (
                <Link to="/login">
                    <button className=" ml-5 btn btn-primary">Login</button>
                </Link>
            )}
        </>



    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl logo-container w-40 h-auto">
                    <img src={logo} alt="" className="w-full h-full" />
                </Link>
            </div>
            <div className="navbar-center hidden font-bold text-primary text-2xl lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;