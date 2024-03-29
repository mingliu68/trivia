import { useEffect, useState } from 'react';
import Option from "./Option";
import Steps from './Steps';
import './Question.css'
import { colors, badgeColors, scoreUnit, myData } from '../../data';


const Question = (props) => {
    const { question, current, setCurrent, cleanQuestion, setGameOver, setScore, score, setLoading, totalScore, setTotalScore, correctCounts, setCorrectCounts } = props;



    const [answer, setAnswer] = useState(undefined);
    const [flipCard, setFlipCard] = useState(undefined)
    const handleSetAnswer = (ans) => {
        if (answer === undefined) {
            setAnswer(ans);
        }
    }

    const handleNext = () => {
        if (cleanQuestion.answerKey === answer) {

            const newScore = score + scoreUnit[question.difficulty];
            setScore(newScore);
            setCorrectCounts(correctCounts + 1);
        }
        if (current < 9 && answer !== undefined) {
            setAnswer(undefined);
            setFlipCard(undefined);
            setCurrent(current + 1);
            setTotalScore(totalScore + scoreUnit[question.difficulty]);
        } else if (current >= 9 && answer !== undefined) {
            // end of game, game over
            setFlipCard(undefined);
            setTotalScore(totalScore + scoreUnit[question.difficulty]);
            delayGameOver();
        }
    }

    const delayGameOver = () => {
        setLoading(true);

        const delay = () => {
            setTimeout(() => {
                setGameOver(true);
                setAnswer(undefined);
            }, 1500)
        }
        delay();
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }

    return (
        <div className="questionWrapper">
            <div className="questionBubble" >
                <div className="badge" style={{ background: badgeColors[question.difficulty], position: "absolute", top: "-45px", left: 0 }}>{question.difficulty.toUpperCase()}</div>

                <h1 style={{ padding: "0 30px", }}>{cleanQuestion.question}</h1>
            </div>
            <div style={{ display: 'flex', marginTop: "45px", position: 'relative' }}>


                {
                    cleanQuestion.options.map((option, i) => {
                        return (
                            <Option
                                key={i}
                                option={option}
                                index={i}
                                answerKey={cleanQuestion.answerKey}
                                correct={i === cleanQuestion.answerKey}
                                answer={answer}
                                handleSetAnswer={handleSetAnswer}
                                flipCard={flipCard}
                                setFlipCard={setFlipCard}
                                color={colors[current % 5]}
                                current={current}
                            />
                        )
                    })
                }

            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <Steps current={current} />
                <button className="button"
                    onClick={handleNext}
                >
                    {current === 9 && answer !== undefined ? "Get Score" : current === 9 && answer === undefined ? "Almost Done" : "Next"}
                </button>
            </div>

        </div>
    )
}


export default Question;