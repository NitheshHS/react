import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import Name from './useStateObj/Name';
import ListItems from './useStateWithArray/ListItems';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
