import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { AppProvider } from './context';

function App() {
  
  return (
    <>
    <AppProvider>
      <Home/>
      <Sidebar/>
      <Modal/>
    </AppProvider>
      
    </>
  );
}

export default App;
