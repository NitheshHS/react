import { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import './App.css';
import books from './data/books.js'
import Book from './components/Book';

const getBook = (index)=>{
 const book = books.find(book=> book.index===index);
 console.log(book);
}

const BookList = (book)=>{
  const [booklist, setBookList] = useState(books)
  
  const addNewBook = (book)=>{
    console.log(book);
    if(book.title==='' && book.author==='' && book.price==='')
      alert('Plase enter all book info')
    else
      setBookList([book, ...booklist])
  }
  useEffect(()=>{
    document.title='amazon best selling books'
  },[])
 
  return(
    <>
    <AddItem addNewBook={addNewBook}/>
    <h1 className="header">amazon best selling books</h1>
    <section className="booklist">
      {booklist.map((book,index)=>{
        return <Book key={index} {...book} getBook = {getBook} number={index}/>
      })}
    </section></>
    
  )
}


function App() {
  return (
      <BookList/>
  );
}

export default App;
