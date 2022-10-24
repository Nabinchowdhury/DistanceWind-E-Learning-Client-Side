import React, { useState } from 'react';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';

export const ThemeContext = createContext();
// data - theme="cmyk"
const Main = () => {
    const [ETheme, setETheme] = useState(true)
    console.log(ETheme)
    const themeToggler = { ETheme, setETheme }
    return (
        <ThemeContext.Provider value={themeToggler}>
            <div data-theme={ETheme ? "cmyk" : "night"}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </ThemeContext.Provider>
    );
};

export default Main;