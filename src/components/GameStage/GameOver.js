const GameOver = (props) => {

    const { score, setGameOver, setGameMode } = props;

    const handleButtonClick = (e) => {
        setGameOver(false);
        setGameMode(false);
        setCategory(undefined);
        setQuestions([]);
        setCatDisplay(undefined);
        setCatIndex(undefined);

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            Game Over
            You scored {score} points!
            <button className="button" onClick={handleButtonClick}>Start New Game</button>
        </div>
    )
}

export default GameOver;