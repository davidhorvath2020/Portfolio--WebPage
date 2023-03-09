import React from "react";
import { useState, useEffect } from "react";
import MySkillsCard from '../components/MySkillsCard';

import { FaFigma, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiQgis } from "react-icons/si";




const About = (props) => {

    const Icons = {
        figmaIcon: <FaFigma />,
        JSIcon: <TbBrandJavascript/>,
        ReactIcon: <FaReact/>,
        QGisIcon: <SiQgis/>
    }

    return (
        <div>
            <h1>My Developer Skills</h1>
            <div className="MySkillsCardContainer">
                <MySkillsCard
                    FrontSide='FrontSide'
                    icon={Icons.figmaIcon}

                    BackSide='BackSide'
                    title="Designer"
                    details="Figma"
                    DarkMode={props.DarkMode}
                />
                <MySkillsCard
                    FrontSide='FrontSide'
                    icon={Icons.JSIcon}

                    BackSide='BackSide'
                    title="Frontend Developer"
                    details="HTML, CSS, JS"
                    DarkMode={props.DarkMode}
                />
                <MySkillsCard
                    FrontSide='FrontSide'
                    icon={Icons.ReactIcon}

                    BackSide='BackSide'
                    title="Frontend Developer"
                    details="React"
                    DarkMode={props.DarkMode}
                />
                <MySkillsCard
                    FrontSide='FrontSide'
                    icon={Icons.QGisIcon}

                    BackSide='BackSide'
                    title="GIS"
                    details="QGis, ArcGis"
                    DarkMode={props.DarkMode}
                />
            </div>
        </div>
    )
}

export default About;