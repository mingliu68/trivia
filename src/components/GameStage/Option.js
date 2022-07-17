import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Option.css';

const Option = (props) => {

    const { option, correct, index, answer, handleSetAnswer, flipCard, setFlipCard, color, current, answerKey } = props;
    const updateTextRef = useRef();

    const [youGotIt, setYouGotIt] = useState(undefined);

    // checking if the option contains words with too many characters
    // drop the font size based on the max letter count per word
    const getStyle = () => {
        const optionStyle = { "opacity": 1 };
        const optionArr = option.split(" ");
        let maxCount = 0;

        for (let i = 0; i < optionArr.length; i++) {
            console.log(optionArr[i]);
            if (optionArr[i].length > 20 && optionArr[i].length > maxCount) {
                optionStyle.fontSize = "1.4em";
                maxCount = optionArr[i].length;
            }
            else if (optionArr[i].length > 16 && optionArr[i].length > maxCount) {
                optionStyle.fontSize = "1.6em";
                maxCount = optionArr[i].length;
            }
            else if (optionArr[i].length > 13 && optionArr[i].length > maxCount) {
                optionStyle.fontSize = "1.8em";
                maxCount = optionArr[i].length;
            }
        }
        return optionStyle;
    }

    const handleOnClick = (e, i) => {
        if (answer === undefined) {
            setFlipCard(i);
            handleSetAnswer(i);
            if (answerKey === index) {
                setYouGotIt(true);
            } else {
                setYouGotIt(false);
            }
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
            <div
                style={{
                    position: "absolute",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                    top: "-30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    opacity: flipCard !== undefined && index === answerKey && answer !== answerKey ? 1 : 0,
                    transition: "all 0.3s",
                    border: "8px solid white"
                }}>
                <FontAwesomeIcon icon={faCheck} size="3x" style={{ paddingTop: "6px", color: "white" }} />
            </div>
            <div className="optionInner" style={{ transform: flipCard === index ? "rotateY(180deg)" : "none" }}>

                <div className="optionFront" style={{ background: color }}>
                    <h1 ref={updateTextRef} style={getStyle()}>{option}</h1>
                </div>
                <div className="optionBack" style={{ background: youGotIt === true ? "#008F7A" : youGotIt === false ? "#C34A36" : color }}>
                    <h1 >{youGotIt === true ? "CORRECT!!!" : youGotIt === false ? "WRONG!!!" : null}</h1>
                </div>
            </div>
        </div>
    )
}

export default Option;