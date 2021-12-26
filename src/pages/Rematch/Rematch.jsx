import React, { useState, useContext } from "react";
import { PeerContext } from "..//PeerInfo/PeerInfo";
import { 
    useNavigate, 
    useParams 
} from "react-router-dom";
import "../../index.css";

function Rematch() {
    const navigate = useNavigate();
    const contextProps = useContext(PeerContext)
    const [restartText, setRText] = useState("Click restart to rematch your opponent")

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
        else {
            console.log(contextProps.restartCount)
            if (contextProps.restartCount === 0){
                contextProps.conn.send("restartWait")
                setRText("Waiting for opponent")
                //setRText("Opponent is waiting for you") in peer wait
            }
            else {
                contextProps.conn.send("restart")
                navigate("/TicTacToe/onlineGame")   
            }
        }
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
                <h1>{restartText}</h1>
        </div>
    )
}

export default Rematch