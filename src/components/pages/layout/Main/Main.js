import React, { useState } from 'react';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';

export const ThemeContext = createContext();
const Main = () => {
    const [ETheme, setETheme] = useState(false)
    const themeToggler = { ETheme, setETheme }
    return (
        <ThemeContext.Provider value={themeToggler}>
            <div data-theme={ETheme ? "cmyk" : "night"} className={` ${ETheme ? 'bg-gradient-to-r from-slate-700' : "bg-gradient-to-r from-gray-400"}`}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </ThemeContext.Provider>

    );
};

export default Main;