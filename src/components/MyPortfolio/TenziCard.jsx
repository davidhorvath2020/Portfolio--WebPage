import React from "react";

const TenziCard = (props) => {

    const styles = {
        backgroundColor: props.isHeld ? "#64ffda" : "#020c1b",
        color: props.isHeld ? "#020c1b" : "#64ffda"
    }

    return (
        <div onClick={props.HoldTheDice} style={styles} className="DiceFace">
            <h2 className="DiceNumber">{props.value}</h2>
        </div>
    )
}
export default TenziCard;