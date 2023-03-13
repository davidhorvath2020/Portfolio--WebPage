import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div style={props.style}>
            <header>
                <Header toggleDarkMode={props.toggleDarkMode} DarkMode={props.DarkMode}/>
            </header>
            <main >
                <Outlet />
            </main>
            <Footer DarkMode={props.DarkMode}/>
        </div>

    )
}

export default Layout;
