
import Question from './Question';

const GameStage = (props) => {
    const { category, questions, catDisplay } = props;


    return (
        <div>
            <h1>{catDisplay}</h1>
            {
                questions.map((question, i) => {
                    return (
                        <Question key={i} question={question} />
                    )
                })
            }
        </div>
    )
}
export default GameStage;