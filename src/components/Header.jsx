import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Header = (props) => {
    return (
        <nav className={`${props.DarkMode && "Navbar--Dark"}`}>
            <div className="Navbar--LogoDiv">
                <img src="../src/assets/images/Logo.png" className="Logo"/>
            </div>
            <div className="Navbar--LinkCointainer">
                <div className="Navbar--Links">
                    <Link
                        className={`Navbar--Element ${props.DarkMode && 'Navbar--Element--Dark'}`}
                        to='/'>Home</Link>
                    <Link
                        className={`Navbar--Element ${props.DarkMode && 'Navbar--Element--Dark'}`}
                        to='/About'>About</Link>
                    <Link
                        className={`Navbar--Element ${props.DarkMode && 'Navbar--Element--Dark'}`}
                        to='/MyPortfolio'>MyPortfolio</Link>
                </div>
                <div className={`ThemeButton ${props.DarkMode && "ThemeButton--Dark"} `}
                    onClick={props.toggleDarkMode} >
                    {props.DarkMode === true ?
                        <MdDarkMode /> :
                        <MdOutlineDarkMode />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header;