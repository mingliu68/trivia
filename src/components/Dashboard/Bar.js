import { useState, useEffect } from 'react';
const Bar = (props) => {
    const { score, index, len } = props;

    const [height, setHeight] = useState("1px");

    const width = `${300 / len}px`;

    const handleMouseOver = e => {

    }


    useEffect(() => {
        setHeight(`${score.score * 3}px`);
    }, [])

    return (
        <div className="barWrapper" style={{ height: height, width: width }} onMouseOver={handleMouseOver}>
            <div className="tooltipText">{score.score}</div>
        </div>
    )
}

export default Bar;