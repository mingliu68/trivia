import { useState } from 'react';
import Question from './Question';


const GameStage = (props) => {
    const { questions, catDisplay } = props;

    const [current, setCurrent] = useState(0);

    const cleanQuestion = () => {
        let question = questions[current]
        let q = question.question.replaceAll("&quot;", "''");
        q = q.replaceAll("&#039;", "'");
        q = q.replaceAll("&rsquo;", "'");

        const setOptions = new Set(question.incorrect_answers);

        let options = Array.from(setOptions)

        const answerIndex = Math.floor(Math.random() * 4);

        options.splice(answerIndex, 0, question.correct_answer);
        for (let i = 0; i < options.length; i++) {
            options[i] = options[i].replaceAll("&quot;", '"');
            options[i] = options[i].replaceAll("&#039;", "'");
            options[i] = options[i].replaceAll("&rsquo;", "'")
        }
        return { "options": options, "answerKey": answerIndex, "question": q }
    }


    return (
        <div>
            <h1>{catDisplay}</h1>
            <Question question={questions[current]} current={current} setCurrent={setCurrent} cleanQuestion={cleanQuestion()} />

        </div>
    )
}
export default GameStage;