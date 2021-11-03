import React from "react";

function Square(props) {
    return (
        <button class="text-10xl" onClick={() => props.handleClick(props.index)} style={{border: "1x solid black"}}>
            {props.value}
        </button>
    )
}

export default Square