import "./Dashboard.css"
import Donut from './Donut';
import { myData } from '../../data';
const Dashboard = () => {

    const { id, userName, bestScore, scores } = myData;


    return (
        <div className="dashboardWrapper">
            <h1>Hello {userName}</h1>
            <Donut value={bestScore.score} data={`in category ${bestScore.category}`} />
            <div>You've played a total of {scores.length} games</div>

        </div>
    )
}

export default Dashboard;