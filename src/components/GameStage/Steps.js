import { useEffect } from "react";
import Step from "./Step";

const Steps = (props) => {
    const { current } = props
    const arr = new Array(10).fill("0");

    // useEffect(() => {
    //     console.log(current)
    // }, [current])

    return (
        <div style={{ display: 'flex', padding: "10px", height: "70px", alignItems: "center", marginTop: "20px" }}>
            {
                arr.map((elem, i) => {
                    return (
                        <Step key={i} active={i <= current ? true : false} />
                    )
                })
            }

        </div>
    )
}

export default Steps;