import React from "react";

function Square(props) {
    return (
        <button onClick={() => props.handleClick(props.index)}>
            {props.value}
        </button>
    )
}

export default Square