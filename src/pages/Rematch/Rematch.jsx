import React from "react";
import { 
    useNavigate, 
    useParams 
} from "react-router-dom";
import "../../index.css";

function WhoWon() {
    const { winner } = useParams()

    if (winner !== "draw") {
        return winner + " won the game!"
    }
    else {
        return "Draw!"
    }
}

function Rematch() {
    const navigate = useNavigate();

    return (
        <div className="centerDivElement min-h-screen">
            <div>
                <p className="text-5xl">{WhoWon()}</p>
            </div>
            <div>
                <button className="button marginTopPlus" onClick={() => navigate("/TicTacToe")}>Menu</button>
                <button className="button marginTopPlus" onClick={() => navigate("/TicTacToe/game")}>Restart</button>
            </div>
        </div>
    )
}

export default Rematch