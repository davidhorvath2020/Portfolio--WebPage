import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Header = (props) => {

    const activeStyle = {
        fontSize: '1.2rem'
    }

    return (
        <nav className={`${props.DarkMode && "Navbar--Dark"}`}>
            <div className="Navbar--LogoDiv">
                <img src="../src/assets/images/Logo.png" className="Logo" />
            </div>
            <div className="Navbar--LinkCointainer">
                <div className="Navbar--Links">
                    <NavLink
                        className={`Navbar--Element ${props.DarkMode && 'Navbar--Element--Dark'}`}
                        to='/'
                        style={({ isActive }) => isActive ? activeStyle : null}>
                        Home
                    </NavLink>
                    <NavLink
                        className={`Navbar--Element ${props.DarkMode && 'Navbar--Element--Dark'}`}
                        to='/About'
                        style={({ isActive }) => isActive ? activeStyle : null}>
                        About
                    </NavLink>
                    <NavLink
                        className={`Navbar--Element ${props.DarkMode && 'Navbar--Element--Dark'}`}
                        to='/MyPortfolio'
                        style={({ isActive }) => isActive ? activeStyle : null}>
                        MyPortfolio
                    </NavLink>
                </div>
                <div className={`ThemeButton ${props.DarkMode && "ThemeButton--Dark"} `}
                    onClick={props.toggleDarkMode} >
                    {props.DarkMode === true ?
                        <MdDarkMode /> :
                        <MdOutlineDarkMode />
                    }
                </div>
            </div>
        </nav >
    )
}

export default Header;