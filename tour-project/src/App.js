import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';
import axios from 'axios';
import { ToursContext } from './context/TourContext';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id)=>{
      const newTours = tours.filter(tour=> tour.id!=id)
      setTours(newTours)
  }

  const fetchTours = async()=>{
    setLoading(true);
    try {
      axios.get('https://course-api.com/react-tours-project')
      .then(res=> {
        console.log(res.data);
        setTours(res.data)
      });
      setLoading(false);
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(()=>{
    fetchTours();
  },[])

  if(loading){
    return (<main>
      <Loading></Loading>
    </main>)
  }
  if(tours.length===0){
    return <main>
      <h1>No More Tours</h1>
      <button className="refresh" onClick={fetchTours}>Refresh</button>
    </main>
  }
  return (
    <ToursContext.Provider value={{tours, removeTour}}>
      <main>
      <Tours/>
    </main>
    </ToursContext.Provider>
    
  );
}

export default App;
