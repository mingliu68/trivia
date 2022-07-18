import { leaderBoard } from "../../data";
import ScoreBar from './ScoreBar';
import './Leaderboard.css';
import gold from '../../assets/gold-medal.png';
import silver from '../../assets/silver-medal.png';
import bronze from '../../assets/bronze-medal.png';


const Leaderboard = () => {

    return (
        <div className="leaderboardWrapper">
            {
                leaderBoard.slice(0, 10).map((score, i) => {
                    return (
                        <ScoreBar key={i} score={score} index={i} medals={[gold, silver, bronze]} />
                    )
                })
            }
        </div>
    )
}

export default Leaderboard;