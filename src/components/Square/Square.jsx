import React from "react";

function Square(props) {
    return (
        <button onClick={() => props.handleClick(props.index)} style={{border: "1x solid black"}}>
            {props.value}
        </button>
    )
}

export default Square