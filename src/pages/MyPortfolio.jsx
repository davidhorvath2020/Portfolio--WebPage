import React from "react";
import Tenzi from "../components/MyPortfolio/Tenzi";

import MyPortfolioJobs from "../components/MyPortfolio/MyPortfolioJobs";

const MyPortfolio = (props) => {
    return (
        <div className="MyPortfolio">
            <div className={`MyPortfolio--Container ${props.DarkMode && 'MyPortfolio--Container--Dark'}`}>
                <div>
                    <h1>MyPortfolio</h1>
                    <div>
                        <MyPortfolioJobs DarkMode={props.DarkMode} />
                    </div>
                    <h3>If everthing you've seen is boring, play some Tenzies!</h3>
                </div>
                <Tenzi />
                alatta dolgok
            </div>
        </div>
    )
}

export default MyPortfolio;