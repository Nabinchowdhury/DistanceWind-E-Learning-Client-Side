import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/rovenlogos_elearning_dark.png"

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-10">
                <div className="navbar-start  w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Courses</Link></li>
                            <li ><Link >FAQ</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>Theme</Link></li>
                            <Link><button className='btn btn-outline btn-warning mx-2'>Log in</button></Link>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVN7KTJO2fVxTtArncxZdkGPld5-EZlCFTHPtNwwkeG2Q3t9a8mrOQqGJzPVnHlFnnYc&usqp=CAU" alt="" className='rounded w-1/6 rounded-full' />
                        <p className='text-center'> <Link className="btn btn-ghost normal-case  text-lg sm:text-2xl md:text-3xl lg:text-4xl ">DistanceWind E-Learning</Link></p>



                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Courses</Link></li>
                        <li ><Link> FAQ </Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Theme</Link></li>
                        <Link><button className='btn btn-outline btn-warning mx-2'>Log in</button></Link>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;