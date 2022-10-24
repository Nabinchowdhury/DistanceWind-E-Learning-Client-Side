import React, { useContext } from 'react';
import { ThemeContext } from '../layout/Main/Main';
import "./Home.css"
const Home = () => {
    const { ETheme } = useContext(ThemeContext)
    return (
        <div className={ETheme ? 'themeLight' : "themeDark"}>
            <h1>Home</h1>
        </div>
    );
};

export default Home;