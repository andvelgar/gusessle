
import AnswerTable from './answerPanel/AnswerTable';
import './App.css';
import {getLeague} from './api/playersApi'

function App() {
  return (
    <div className='app'>
        <AnswerTable league={getLeague()}/>
    </div>
  );
}

export default App;
