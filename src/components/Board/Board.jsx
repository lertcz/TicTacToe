import Square from "../Square/Square"

function Board(props) {
    //squares[1] = "X"
    return (
        props.squares.map((square, i) => <Square key={i} index={i} value={square} handleClick={props.handleClick}></Square>) // onClick={() => props.onClick(i)}
    )
}

export default Board