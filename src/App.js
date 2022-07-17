import './App.css';
import Main from './components/Main/Main';
import { getGradients } from './data';

function App() {

  getGradients();

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
