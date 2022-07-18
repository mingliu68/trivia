import "./Question.css";
import { gameOverMsgs } from "../../data";
const GameOver = (props) => {

    const { score, totalScore, correctCounts, setGameOver, setGameMode, setCategory, setQuestions, setCatDisplay, setCatIndex } = props;

    const finalScore = Math.floor((score / totalScore) * 100);


    const handleButtonClick = (e) => {
        setGameOver(false);
        setGameMode(false);
        setCategory(undefined);
        setQuestions([]);
        setCatDisplay(undefined);
        setCatIndex(undefined);
    }

    return (

        <div className="questionWrapper">
            <div className="gameOverBubble" >
                <h1 style={{ padding: "0 30px", }}>{gameOverMsgs[Math.floor(finalScore / 10)]}</h1>
            </div>
            <div style={{ display: 'flex', marginTop: "45px", position: 'relative' }}>

                You answered {correctCounts} out of 10 questions correctly and  scored {finalScore} points!
                <button className="button" onClick={handleButtonClick}>Start New Game</button>

            </div>


        </div>





    )
}

export default GameOver;