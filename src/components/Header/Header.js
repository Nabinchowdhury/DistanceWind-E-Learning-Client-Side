import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../pages/layout/Main/Main';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { ETheme, setETheme } = useContext(ThemeContext)
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="navbar  lg:px-10">
                <div className="navbar-start  w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/courses">Courses</Link></li>
                            <li ><Link to="/FAQ">FAQ</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link onClick={() => setETheme(!ETheme)}>Theme {ETheme ? <FaSun></FaSun> : <FaMoon></FaMoon>}</Link></li>
                            <Link to="/login"><button className='btn btn-outline btn-warning mx-2'>Log in</button></Link>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVN7KTJO2fVxTtArncxZdkGPld5-EZlCFTHPtNwwkeG2Q3t9a8mrOQqGJzPVnHlFnnYc&usqp=CAU" alt="" className='rounded w-1/6 rounded-full' />
                        <p className='text-center'> <Link to="/" className="ml-3 font-serif font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl ">DistanceWind E-Learning</Link></p>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='px-1'><Link to="/courses">Courses</Link></li>
                        <li className='px-1' ><Link to="/FAQ">FAQ </Link></li>
                        <li className='px-1'><Link to="/blog">Blog</Link></li>
                        <li className='px-1'><Link onClick={() => setETheme(!ETheme)}>Theme {ETheme ? <FaSun></FaSun> : <FaMoon></FaMoon>}</Link></li>
                        {user ? <button className='btn btn-outline btn-error mx-2'>Log out</button> : <Link to="/login"><button className='btn btn-outline btn-warning mx-2'>Log in</button></Link>}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;