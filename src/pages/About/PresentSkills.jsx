import React from "react";
import MySkillsCard from './MySkillsCard';

import { FaFigma, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiQgis } from "react-icons/si";

const PresentSkills = (props) => {

    const Icons = {
        figmaIcon: <FaFigma />,
        JSIcon: <TbBrandJavascript />,
        ReactIcon: <FaReact />,
        QGisIcon: <SiQgis />
    }


    return (
        <div className="PresentSkills">
            <div className={`PresentSkills--Container ${props.DarkMode && 'PresentSkills--Container--Dark'}`}>
                <div>
                    I started to learn programming in high school in Pascal in 2018. 
                    However, I went to study Agricultural Engineering
                    and Agricultural Economics.
                    I started to practice coding in 2022, but this time I could choose.
                    I really liked the frontend development so I began to learn HTML, CSS, JavaScript. 
                    So the bascics. But then the flow caught me. 
                    I continued to learn ReactJS, Git, GitHub, Figma and so on...
                    Here you can check
                </div>
                <h2>My Developer Skills</h2>
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
                ide még jöhetnek dolgok
            </div>
        </div>
    )
}

export default PresentSkills;