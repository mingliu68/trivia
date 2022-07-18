import "./Question.css";
import { gameOverMsgs } from "../../data";
import { useEffect } from "react";
import { myData } from '../../data';
const GameOver = (props) => {

    const { score, totalScore, correctCounts, setGameOver, setGameMode, setCategory, setQuestions, setCatDisplay, setCatIndex, setSelectionMode } = props;

    const finalScore = Math.floor((score / totalScore) * 100);

    const handleButtonClick = (e, type) => {

        setGameOver(false);
        setGameMode(false);
        setCategory(undefined);
        setQuestions([]);
        setCatDisplay(undefined);
        setCatIndex(undefined);
        if (type === "exit") {
            setSelectionMode(false);
        } else if (type === "new game") {
            setSelectionMode(true);
        }
    }

    return (

        <div className="questionWrapper">
            <div className="gameOverBubble" >
                <h1 style={{ padding: "0 30px", }}>{gameOverMsgs[Math.floor(finalScore / 10)]}</h1>
            </div>
            <div style={{ display: 'flex', marginTop: "45px", position: 'relative', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <h2>You answered {correctCounts} out of 10 questions correctly and  scored {finalScore} points!</h2>
                <div style={{ display: "flex" }}>
                    <button className="button" onClick={e => handleButtonClick(e, "exit")}>Exit Game</button>
                    <button className="button" onClick={e => handleButtonClick(e, "new game")}>Start New Game</button>
                </div>
            </div>


        </div >





    )
}

export default GameOver;