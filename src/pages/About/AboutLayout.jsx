import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import About from "./PresentSkills";

const AboutLayout = (props) => {

    const activeStyle = {
        fontSize: '1.2rem'
    }

    return (
        <div className="About">
            <div className={`About--Container ${props.DarkMode && 'About--Container--Dark'}`}>
                Follow my Journy
                <nav className="About--Navbar">
                    <NavLink className={`Navbar--Element ${props.DarkMode && 'Navbar--Element--Dark'}`}
                        to='.'
                        style={({ isActive }) => isActive ? activeStyle : null}
                        end
                    >
                        Past
                    </NavLink>
                    <NavLink className={`Navbar--Element ${props.DarkMode && 'Navbar--Element--Dark'}`}
                        to='Present'
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >
                        Present
                    </NavLink>
                    <NavLink className={`Navbar--Element ${props.DarkMode && 'Navbar--Element--Dark'}`}
                        to='Future'
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >
                        Future
                    </NavLink>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default AboutLayout;