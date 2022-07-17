const Step = (props) => {
    const { active } = props;
    return (
        <div style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            margin: "10px",
            backgroundColor: active === false ? "#B0A8B9" : "#00C9A7",

        }}>

        </div>
    )
}

export default Step;