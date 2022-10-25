import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../layout/Main/Main';
import "./Home.css"
const Home = () => {
    const { ETheme } = useContext(ThemeContext)
    return (
        <div className={`relative ${ETheme ? 'themeLight' : "themeDark"}`}>
            <div className={`mx-auto text-center w-full md:w-1/2 absolute top-1/3
           ${ETheme ? "right-0 md:right-10" : "left-0 md:left-10"}`}>
                <p className='text:xl md:text-3xl font-bold'>Learn as if you were not reaching your goal and as though you were scared of missing it. Want to view our courses?</p>
                <Link to="/courses"><button className={`btn ${ETheme ? "btn-warning" : "btn-primary"} mt-5 px-5 font-bold`}>Get Started <FaArrowRight className='ml-3'></FaArrowRight></button></Link>
            </div>
        </div >
    );
};

export default Home;