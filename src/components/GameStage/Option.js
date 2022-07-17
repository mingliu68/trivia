import { useEffect, useRef } from 'react'
import './Option.css';

const Option = (props) => {

    const { option, correct, index, answer, handleSetAnswer, flipCard, setFlipCard, color, current } = props;
    const updateTextRef = useRef();

    const handleOnClick = (e, i) => {
        if (answer === undefined) {
            setFlipCard(i);
            handleSetAnswer(i);

        }
    }

    useEffect(() => {
        updateTextRef.current.animate(
            {
                opacity: [0, 1]
            }, 1000
        );
    }, [current])

    return (
        <div className="optionWrapper" onClick={(e) => handleOnClick(e, index)} >
            <div className="optionInner" style={{ transform: flipCard === index ? "rotateY(180deg)" : "none" }}>
                <div className="optionFront" style={{ background: color }}>
                    <h1 ref={updateTextRef} style={{ opacity: 1 }}>{option}</h1>
                </div>
                <div className="optionBack" style={{ background: correct === true ? "green" : "red" }}>
                    <h1>{correct === true ? "CORRECT!!!" : "WRONG!!!"}</h1>
                </div>
            </div>
        </div>
    )
}

export default Option;