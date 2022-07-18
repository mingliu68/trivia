import { leaderBoard } from "../../data";


const ScoreBar = (props) => {
    const { score, index, medals } = props;
    const { id, name, bestScore } = score;

    return (
        <div className="scoreBarWrapper">
            <div className="numberContainer">
                {
                    id > 2 ?
                        <h3>{id + 1}</h3>
                        :
                        <img src={medals[index]} />
                }
            </div>
            <div className="avatarContainer">
                <div className="avatar" style={{ color: "white", backgroundColor: "rgb(50 45 121)", cursor: "auto" }}>{name[0]}</div>
            </div>
            <div className="scoreBar"><span>{name}</span> <span>{bestScore}</span> </div>
        </div>
    )
}

export default ScoreBar;