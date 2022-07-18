const Welcome = (props) => {

    const { setSelectionMode } = props;

    return (
        <div>
            <button className="button" onClick={(e) => setSelectionMode(true)}>Select a category</button>
        </div>
    )
}

export default Welcome;