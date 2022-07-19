import './Donut.css'
const Donut = (props) => {
    const { value, data } = props

    const dashValue = `${value} ${100 - value}`;

    const rootElem = document.documentElement;
    rootElem.style.setProperty("--best-score-value", value);
    rootElem.style.setProperty("--best-score-value-offset", 100 - value);

    return (
        <div className="donutWrapper">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">

                <circle className="donutHole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                <circle className="donutRing" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
                <circle
                    className="donutSegment"
                    cx="20" cy="20" r="15.91549430918954"
                    fill="transparent"
                    strokeWidth="3.5"
                    strokeDasharray={dashValue}
                    strokeDashoffset="25"
                    strokeLinecap="round"
                >
                </circle>
                <g className="donutText">
                    <text y="50%" transform="translate(0, 2)">
                        <tspan x="50%" textAnchor="middle" className="donutScore">{value}</tspan>
                    </text>
                    <text y="60%" transform="translate(0, 2)">
                        <tspan x="50%" textAnchor="middle" className="donutData">{data}</tspan>
                    </text>
                </g>
            </svg>
            <div>My Best Score</div>
        </div>
    )
}

export default Donut;