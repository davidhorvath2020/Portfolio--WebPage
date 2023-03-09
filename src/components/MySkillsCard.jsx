import React from "react";
import { useState } from "react";

const MySkillsCard = (props) => {

    const FrontSideCard = () => {
        return (
            <div>
                <h1>{props.icon}</h1>
            </div>
        )
    }
    const BackSideCard = () => {
        return (
            <div>
                <div>ide jönnek a backside dolgai</div>
                <div>{props.title}</div>
                <div>{props.details}</div>
            </div>
        )
    }

    const FrontValue = <FrontSideCard />
    const BackValue = <BackSideCard />

    const [flipCard, setFlipCard] = useState(props.FrontSide);
    const [outside, setOutside] = useState(FrontValue)
    const [sideClassName, setSideClassName] = useState('MySkillsCard--Front');

    function handleClick() {

        setFlipCard(prevFlipCard => {
            if (prevFlipCard == props.FrontSide) {
                setSideClassName('MySkillsCard--Back')
                return props.BackSide
            } else {
                setSideClassName('MySkillsCard--Front')
                return props.FrontSide
            }
        })

        if (flipCard == 'FrontSide') {
            setOutside(BackValue)
        } else {
            setOutside(FrontValue)
        }
        console.log(styleObjectClassName)
    }
    const styleObject = { sideClassName: sideClassName, Dark: props.DarkMode && "MySkillsCard--Dark" }
    const styleObjectClassName = styleObject.sideClassName + ' ' + styleObject.Dark

    return (
        <div
            className={`MySkillsCard ${styleObjectClassName}`}
            onClick={handleClick}>
            {outside}
        </div>
    )
}

export default MySkillsCard;