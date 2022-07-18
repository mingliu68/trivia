import { useEffect, useState } from 'react';
// components
import GameStage from '../GameStage/GameStage';
import Dashboard from '../Dashboard/Dashboard';
import SelectGame from '../SelectGame/SelectGame';
import Welcome from './Welcome';
import './Main.css'

const Main = (props) => {

    const { dashboard, setGameMode, setSelectionMode, selectionMode, gameMode } = props;

    // const [gameMode, setGameMode] = useState(false);
    // const [selectionMode, setSelectionMode] = useState(false);
    const [category, setCategory] = useState(undefined);
    const [questions, setQuestions] = useState([]);
    const [catDisplay, setCatDisplay] = useState(undefined);
    const [catIndex, setCatIndex] = useState(undefined)
    const [loading, setLoading] = useState(false);


    return (
        <div className="mainWrapper">

            {
                loading === true ?
                    (
                        <div className="loader-container">
                            <div className="spinner"></div>
                        </div>
                    ) : null
            }

            {
                gameMode === true ?
                    <GameStage
                        questions={questions}
                        catDisplay={catDisplay}
                        setGameMode={setGameMode}
                        category={category}
                        catIndex={catIndex}
                        setCategory={setCategory}
                        setQuestions={setQuestions}
                        setCatDisplay={setCatDisplay}
                        setCatIndex={setCatIndex}
                        loading={loading}
                        setLoading={setLoading}
                        setSelectionMode={setSelectionMode}

                    />
                    :
                    dashboard === true ?
                        <Dashboard />
                        :
                        selectionMode === true ?
                            <SelectGame
                                setCategory={setCategory}
                                selectedCat={category}
                                setGameMode={setGameMode}
                                setQuestions={setQuestions}
                                setCatDisplay={setCatDisplay}
                                setCatIndex={setCatIndex}
                                loading={loading}
                                setLoading={setLoading}
                                setSelectionMode={setSelectionMode}
                            />
                            :
                            <Welcome setSelectionMode={setSelectionMode} />

            }
        </div>
    )
}

export default Main;