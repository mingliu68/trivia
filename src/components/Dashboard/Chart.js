import "./Chart.css";
import Bar from './Bar';

const Chart = (props) => {
    const { scores } = props;
    const scoresArr = scores.length > 10 ? scores.slice(scores.length - 10) : scores;
    // const scoresArr = scores.slice(12)
    return (
        <div className="chartWrapper">
            <div className="chartInner">
                {
                    scoresArr.map((score, i) => {
                        return (
                            <Bar key={i} score={score} index={i} len={scoresArr.length} />
                        )
                    })
                }
            </div>
            <div>My last {scores.length > 10 ? "10" : scores.length} games</div>
        </div>
    )
}

export default Chart;