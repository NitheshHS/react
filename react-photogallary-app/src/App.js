import './App.css';
import { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import SearchCard from './components/SearchCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [term, setTerm] = useState('')

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY}&q=${term}&image_type=photo`)
    .then(res=> res.json())
    .then(data =>{
      setImages(data.hits);
      setIsLoding(false);
    })
    .catch(err=>console.log(err));
  },[term])
  return (
    <>
      <SearchCard searchText={(text)=>setTerm(text)}></SearchCard>
      <div className="card-container">
      {isLoading?<h1>Smoething went wrong</h1>:
      images.map(image=>(
        <ImageCard image={image} key={image.id}></ImageCard>
      ))}
      </div>
      </> 
  );
}

export default App;
