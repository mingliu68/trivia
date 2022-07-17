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
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
            You answered {correctCounts} out of 10 questions correctly and  scored {finalScore} points!
            <button className="button" onClick={handleButtonClick}>Start New Game</button>
        </div>
    )
}

export default GameOver;