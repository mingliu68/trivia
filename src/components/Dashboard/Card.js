import { category } from "../../data";
import './Card.css';

const Card = (props) => {
    const { img, type, size, data } = props;
    const classlist = `featureCardWrapper featureCardWrapper_${size}`

    const featureImg = () => {
        if (img !== null || img !== undefined) {
            if (size == "300") {
                return ({
                    minWidth: "300px",
                    width: "100%",
                    height: "200px",
                    background: `url(${img})`,
                    backgroundSize: "cover",
                    borderRadius: "18px"
                })
            } else if (size == "150" || size == "300_150") {
                return ({
                    minWidth: "50px",
                    width: "75px",
                    height: "75px",
                    background: `url(${img})`,
                    backgroundSize: "cover",

                })

            }
            return null;
        }
    }

    // const featureImg = img !== null || img !== undefined ? {
    //     minWidth: "300px",
    //     width: "100%",
    //     height: "200px",
    //     background: `url(${img})`,
    //     backgroundSize: "cover",
    //     borderRadius: "18px"
    // } : null;

    const getCard = (type) => {
        switch (type) {
            case "featureCard_button":
                return (
                    <div className={classlist} >
                        <div style={featureImg()} />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0" }}>
                            <p className="featureCard_300_description">{data.description}</p>
                            <div className="featureCard_300_button">
                                <span>{data.button_content}</span>
                            </div>
                        </div>
                    </div>
                )
                break;
            case "featureCard":
                return (
                    <div className={classlist} >
                        <div style={featureImg()} />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "20px 0" }}>
                            <p style={{ textAlign: "left", color: '#4B4453', fontWeight: "bold" }}>{data.description}</p>

                        </div>
                    </div>
                )
                break;
            case "miniCard":
                return (
                    <div className={classlist} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <div style={featureImg()} />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px 0 0" }}>
                            <p style={{ margin: 0, color: '#4B4453', fontWeight: "bold" }}>{data.description}</p>
                            <p style={{ margin: 0, color: "#666666", fontSize: "12px" }}>{data.info}</p>
                        </div>
                    </div>
                )
                break;
            case "halfCard":
                return (
                    <div className={classlist} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                        <div style={{ width: "45%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", padding: "10px 0 0" }}>
                            <p style={{ textAlign: "left", margin: 0, color: '#4B4453', fontWeight: "bold" }}>{data.description}</p>
                            <p style={{ textAlign: "left", margin: 0, color: "#666666", fontSize: "12px" }}>{data.info}</p>
                        </div>
                        <div style={featureImg()} />
                    </div>
                )
                break;
            default:
                break;
        }

    }
    return getCard(type);

    // (
    //    <div className={classlist} >
    //     <div style={imgStyle}></div>
    //     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "20px 0" }}>
    //         <p style={{ textAlign: "left", color: '#4B4453', fontWeight: "bold" }}>{data.description}</p>
    //         <div style={{ marginBottom: "20px", minWidth: "50px", minHeight: "50px", borderRadius: "15px", background: "#845EC2", fontSize: "40px", fontWeight: "bold", color: "white", cursor: "pointer" }}>
    //             <span>{data.button_content} </span>
    //         </div>
    //     </div>
    // </div>
    //)


}

export default Card;