import "./Welcome.css";
import '../GameStage/Option.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Leaderboard from "./Leaderboard";

const Welcome = (props) => {

    const { setSelectionMode } = props;

    return (
        <div className="welcomeWrapper">
            <div className="welcomeInner">
                <div>
                    <div className="questionDialogWrapper">
                        <div className="questionDialog">
                            <h1>Who was the first ever actor to play "The Doctor" on "Doctor Who"?</h1>

                        </div>
                        <div className="answerDialog">
                            <h1>David<br />Tennant </h1>
                        </div>
                        <div className="optionCheckMark" style={{ left: "55%" }}>
                            <FontAwesomeIcon icon={faCheck} size="3x" style={{ paddingTop: "6px", color: "white" }} />
                        </div>

                    </div>
                    <button className="button" style={{ margin: "30px", boxShadow: '1px 2px 5px #00000050', backgroundColor: "#00C0A3" }} onClick={(e) => setSelectionMode(true)}>Let's Play!</button>

                </div>
                <Leaderboard />
                {/* <div className="leaderBoard">
                    
                </div> */}
            </div>


        </div>
    )
}


export default Welcome;