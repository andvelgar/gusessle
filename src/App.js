
import { getLeague } from './api/playersApi';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className='app'>
      <Game league={getLeague()}></Game>
    </div>
  );
}

export default App;
