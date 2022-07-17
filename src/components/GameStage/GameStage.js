import { useState } from 'react';
import Question from './Question';
import GameOver from './GameOver';
import { category as cat } from '../../data';


const GameStage = (props) => {
    const { questions, catDisplay, setGameMode, category, catIndex, setCategory, setQuestions, setCatDisplay, setCatIndex, loading, setLoading } = props;

    const [current, setCurrent] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const background = `url(${cat[catIndex].img})`
    console.log(cat[catIndex].img)

    const cleanQuestion = () => {
        let question = questions[current]
        let q = question.question.replaceAll("&quot;", "''");
        q = q.replaceAll("&#039;", "'");
        q = q.replaceAll("&rsquo;", "'");

        const setOptions = new Set(question.incorrect_answers);

        let options = Array.from(setOptions)

        const answerIndex = Math.floor(Math.random() * 4);

        options.splice(answerIndex, 0, question.correct_answer);
        for (let i = 0; i < options.length; i++) {
            options[i] = options[i].replaceAll("&quot;", '"');
            options[i] = options[i].replaceAll("&#039;", "'");
            options[i] = options[i].replaceAll("&rsquo;", "'")
        }
        return { "options": options, "answerKey": answerIndex, "question": q }
    }


    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "250px", background: background, backgroundSize: "cover", backgroundPosition: "center center" }}>
                <h1 style={{ background: "#00000050", padding: "10px 20px", fontSize: "40px" }}>{catDisplay}</h1>
            </div>

            {
                gameOver !== true ?
                    <Question
                        question={questions[current]}
                        current={current}
                        setCurrent={setCurrent}
                        cleanQuestion={cleanQuestion()}
                        setGameOver={setGameOver}
                        setGameMode={setGameMode}
                        setScore={setScore}
                        score={score}
                        setLoading={setLoading}
                    />
                    :
                    <GameOver
                        score={score}
                        setGameOver={setGameOver}
                        setGameMode={setGameMode}
                        setCategory={setCategory}
                        setQuestions={setQuestions}
                        setCatDisplay={setCatDisplay}
                        setCatIndex={setCatIndex}
                    />
            }


        </div>
    )
}
export default GameStage;