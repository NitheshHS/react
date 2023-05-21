import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import List from './components/List';

function App() {
  const [name, setName]=useState('');
  const [list, setList]=useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show:false, msg:'', type:''});

  const handleSubmit = (e)=>{
      e.preventDefault();
      if(!name){
        showAlert(true, 'Please enter value', 'danger')
      }else if(name && isEditing){
        showAlert(true, 'Item modified', 'sucess');
        setList(list.map(item=>{
          if(item.id===editID) return {...item, title:name}
          return item
        }))
        setEditID(null);
        setIsEditing(false);
        setName('')
      }else{
        showAlert(true, "Item added to List", 'success');
        const newList = {id:new Date().getTime().toString(), title:name};
        setList([...list, newList]);
        setName('');
      console.log('form submit')
  }
}
  const showAlert = (show=false, msg="", type="")=>{
      setAlert({show, msg, type})
  }
  const clearItems = ()=>{
    showAlert(true, 'Empty Items', 'danger')
    setList([])
  }
  const removeItem = (id)=>{
    showAlert(true, 'Item removed', 'danger')
    const newList = list.filter(item=>item.id!==id);
    setList(newList)
  }
  const editItem = (id)=>{
    const listItem = list.find(item=>item.id===id);
    setIsEditing(true);
    setEditID(id);
    setName(listItem.title)
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
          <h2 className="title">Grocery Bud</h2>
          <div className="form-control">
            <input type="text" className="form-input" 
            value={name} onChange={e=>setName(e.target.value)} placeholder='e.g eggs'></input>
            <button type="submit" className="submit-btn">
              {isEditing?'edit':'submit'}
            </button>
          </div>
      </form>
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className="clear-btn" onClick={clearItems}>
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
