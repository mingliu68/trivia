import { useState } from 'react';
// components
import GameStage from '../GameStage/GameStage';
import Dashboard from '../Dashboard/Dashboard';
import SelectGame from '../SelectGame/SelectGame';

import './Main.css'


const Main = () => {

    const [gameMode, setGameMode] = useState(false);
    const [dashboard, setDashboard] = useState(false);

    return (
        <div className="mainWrapper">
            {
                gameMode === true ?
                    <GameStage />
                    :
                    dashboard === true ?
                        <Dashboard />
                        :
                        <SelectGame />
            }
        </div>
    )
}

export default Main;