import { useEffect, useState } from 'react';
import Option from "./Option";
import Steps from './Steps';
import './Question.css'
import { colors } from '../../data';


const Question = (props) => {
    const { question, current, setCurrent, cleanQuestion, setGameOver, setGameMode, setScore, score, setLoading } = props;

    const [answer, setAnswer] = useState(undefined);
    const [flipCard, setFlipCard] = useState(undefined)
    const handleSetAnswer = (ans) => {
        if (answer === undefined) {
            setAnswer(ans);
        }
    }

    const handleNext = () => {
        if (cleanQuestion.answerKey === answer) {
            const newScore = score + 10;
            setScore(newScore);
        }
        if (current < 9 && answer !== undefined) {
            setAnswer(undefined);
            setFlipCard(undefined);
            setCurrent(current + 1);
        } else if (current >= 9 && answer !== undefined) {
            setAnswer(undefined);
            setFlipCard(undefined);
            delayGameOver();
        }
    }

    const delayGameOver = () => {
        setGameOver(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    return (
        <div className="questionWrapper">
            <div className="questionBubble" >
                <h1 style={{ padding: "0 30px", }}>{cleanQuestion.question}</h1>
            </div>

            <div style={{ display: 'flex', marginTop: "45px" }}>
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