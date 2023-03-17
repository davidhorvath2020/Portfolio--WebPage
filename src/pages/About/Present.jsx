import React from "react";
import PresentSkills from "./PresentSkills";

const Present = (props) => {
    return (
        <div>
            <h1>Present</h1>
            <div>
                jelenleg tanulom: hol járok most:
            </div>
            <PresentSkills DarkMode={props.DarkMode} />
        </div>
    )
}

export default Present;