const Question = (props) => {
    const { question } = props;
    let q = question.question.replaceAll("&quot;", "''");
    q = q.replaceAll("&#039;", "'")

    return (
        <div>
            {q}
        </div>
    )
}


export default Question;