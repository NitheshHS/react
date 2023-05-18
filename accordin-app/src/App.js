import './App.css';
import questions from './Data';
import SingleQuestion from './SingleQuestion';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Questions??</h1>
        {questions.map(question=><SingleQuestion key={question.id} question={question}/>)}
      </div>
    </div>
  );
}

export default App;
