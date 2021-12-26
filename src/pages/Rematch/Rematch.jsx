import React, { useContext } from "react";
import { PeerContext } from "..//PeerInfo/PeerInfo";
import { 
    useNavigate, 
    useParams 
} from "react-router-dom";
import "../../index.css";

function Rematch() {
    const navigate = useNavigate();
    const contextProps = useContext(PeerContext)

    function WhoWon() {
        const { winner } = useParams()
    
        if (winner !== "draw") {
            if (contextProps.shape === winner) {
                contextProps.setOnTurn(false)
            }
            else {
                contextProps.setOnTurn(true)
            }
            return winner + " won the game!"
        }
        else {
            return "Draw!"
        }
    }

    function home() {
        navigate("/TicTacToe")
    }
    
    function restart() {
        console.log(contextProps)
        if (!contextProps.conn) {
            navigate("/TicTacToe/localGame")
        }
        navigate("/TicTacToe/onlineGame")
    }

    return (
        <div className="centerDivElementCol min-h-screen">
            <div>
                <p className="text-5xl">{WhoWon()}</p>
            </div>
            <div>
                <button className="button marginTopPlus" onClick={() => home()}>Menu</button>
                <button className="button marginTopPlus" onClick={() => restart()}>Restart</button>
            </div>
        </div>
    )
}

export default Rematch