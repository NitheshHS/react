import './App.css';
import Categories from './component/Categories';
import Menu from './component/Menu';
import item from './assets/data';
import { useState } from 'react';

const allCategories = ['all', ...new Set(item.map(list=> list.category))];

function App() {
  const [menu, setMenu] = useState(item)
  const [category, setCategory] = useState(allCategories)

  const filterItems = (category)=>{
    if(category === 'all'){
      setMenu(item)
      return;
    }
    const newItems = item.filter(list=> list.category === category);
    setMenu(newItems)
  }

  return (
    <div className="App">
      <main>
        <section className="menu section">
          <div className='title'>
            <h2>Our Menu</h2>
          </div>
          <Categories categories={category} filterItems={filterItems}/>
          <Menu menuItems = {menu}/>
        </section>
        
      </main>
     
      
    </div>
  );
}

export default App;
