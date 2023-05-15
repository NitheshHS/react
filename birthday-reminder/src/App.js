import './App.css';
import List from './components/List';
import {data} from './assets/data.js';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <div className="container">
      <h3>{people.length} birthday today</h3>
      <List people={people}></List>
      <button className="btn" onClick={()=> setPeople([])}>clear me</button>
      </div>
    </div>
  );
}

export default App;
