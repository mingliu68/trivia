import { useEffect, useState } from 'react';
import Option from "./Option";
import { colors } from '../../data';


const Question = (props) => {
    const { question, current, setCurrent, cleanQuestion } = props;

    const [answer, setAnswer] = useState(undefined);
    const [flipCard, setFlipCard] = useState(undefined)

    const handleSetAnswer = (ans) => {
        setAnswer(ans);
    }

    const handleSetCurrent = () => {
        if (current < 9 && answer !== undefined) {
            setAnswer(undefined);
            setFlipCard(undefined);
            delayNext(current);
        }
    }

    const delayNext = () => {
        setTimeout(() => {
            setCurrent(current + 1);
        }, 1000)
    }

    return (
        <div style={{ marginTop: "5px" }}>
            <h3 style={{ margin: "25px" }}>{cleanQuestion.question}</h3>
            <div style={{ display: 'flex' }}>
                {
                    cleanQuestion.options.map((option, i) => {
                        return (
                            <Option
                                key={i}
                                option={option}
                                index={i}
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
            <button onClick={handleSetCurrent}>Next</button>
        </div>
    )
}


export default Question;