import './App.css';
import { useState } from 'react'
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { getGradients } from './data';

function App() {

  const [dashboard, setDashboard] = useState(false);
  const [gameMode, setGameMode] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);

  getGradients();

  return (
    <div className="App">
      <Header setGameMode={setGameMode} setSelectionMode={setSelectionMode} setDashboard={setDashboard} />
      <Main dashboard={dashboard} setGameMode={setGameMode} setSelectionMode={setSelectionMode} gameMode={gameMode} selectionMode={selectionMode} />
      <Footer />
    </div>
  );
}

export default App;
