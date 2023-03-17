import React from "react";
import Work from "./Work2";

const WorkDetail = (props) => {
    console.log(props.id)
    return (
        <div>
            <h1>Work detail</h1>
            {props.id}
            <h2>Workplace: {props.Workplace}</h2>
        </div>
    )
}

export default WorkDetail;