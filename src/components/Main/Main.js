import { useState } from 'react';
// components
import GameStage from '../GameStage/GameStage';
import Dashboard from '../Dashboard/Dashboard';
import SelectGame from '../SelectGame/SelectGame';

import './Main.css'


const Main = () => {


    const [gameMode, setGameMode] = useState(false);
    const [dashboard, setDashboard] = useState(false);
    const [category, setCategory] = useState(undefined);
    const [questions, setQuestions] = useState([]);
    const [catDisplay, setCatDisplay] = useState(undefined);




    return (
        <div className="mainWrapper">
            {
                gameMode === true ?
                    <GameStage
                        category={category}
                        questions={questions}
                        catDisplay={catDisplay}
                    />
                    :
                    dashboard === true ?
                        <Dashboard />
                        :
                        <SelectGame
                            setCategory={setCategory}
                            selectedCat={category}
                            setGameMode={setGameMode}
                            setQuestions={setQuestions}
                            setCatDisplay={setCatDisplay}
                        />
            }
        </div>
    )
}

export default Main;