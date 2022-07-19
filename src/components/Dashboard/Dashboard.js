import { useEffect, useState } from "react";
import "./Dashboard.css"
import Donut from './Donut';
import Chart from './Chart';
import Card from './Card';
import { myData, category } from '../../data';
const Dashboard = () => {

    const { id, userName, bestScore, scores } = myData;
    const catIndex = Math.floor(Math.random() * category.length)


    return (
        <div className="dashboardWrapper">
            <div className="navPanelWrapper">


            </div>
            <div className="contentWrapper">
                <div style={{ textAlign: "left" }}>
                    <h3 style={{ color: "#666666", fontWeight: "400", marginBottom: "10px" }}>Hello {userName}, Welcome back</h3>
                    <h1 style={{ color: "#4B4453", marginTop: "10px" }}>Your Updated Game Stats</h1>
                </div>

                <div className="contentInner">
                    <Card
                        img={category[catIndex].img}
                        type={"featureCard_button"}
                        size={"300"}
                        data={{
                            "description": `Try a game in the ${category[catIndex].cat} category?`,
                            "button_content": `>`,
                        }}
                    />
                    <Card
                        img={category[10].img}
                        type={"featureCard"}
                        size={"300"}
                        data={{
                            "description": `Have you try a game in the ${category[10].cat} category?`
                        }}
                    />
                    <Card
                        img={category[7].img}
                        type={"miniCard"}
                        size={"150"}
                        data={{
                            "description": "New game every day!",
                            "info": "Check back for new games!"
                        }}

                    />
                    <Card
                        img={category[5].img}
                        type={"halfCard"}
                        size={"300_150"}
                        data={{
                            "description": "New game every day!",
                            "info": "Check back for new games!"
                        }}
                    />
                    <Donut value={bestScore.score} data={`in category ${bestScore.category}`} />
                    <Chart scores={scores} />
                </div>

            </div>

        </div>
    )
}

export default Dashboard;