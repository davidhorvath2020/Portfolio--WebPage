import React from "react";
import Tenzi from "../components/Tenzi";
import ProjectsCard from "../components/ProjectsCard";

const MyPortfolio = (props) => {
    return (
        <div className="MyPortfolio">
            <div className={`MyPortfolio--Container ${props.DarkMode && 'MyPortfolio--Container--Dark'}`}>
                <div>
                    <h1>MyPortfolio</h1>
                    <div>
                        <h4>IDE JÖHETNEK A LINKEK</h4>
                        <hr />
                        <ProjectsCard />
                        <h3>project 2</h3>
                    </div>
                    <hr />
                    <h3>If everthing you've seen is boring, play some Tenzies!</h3>
                </div>
                <Tenzi />
                alatta dolgok
            </div>
        </div>
    )
}

export default MyPortfolio;