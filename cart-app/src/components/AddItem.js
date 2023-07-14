import react, { useState } from "react";

const AddItem = (props)=>{
    //console.log(props);
    const [inputTitle, setInputTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    // const handleInputText=(e)=>{
    //     alert("clicked on text field")
    // }
    // const handleButtonClick=()=>{
    //     alert("clicked button")
    // }
    const handleFormSubmit = (e)=>{
        e.preventDefault()
        const value={
            title:inputTitle,
            author:author,
            price:price
        }
        console.log(value);
        props.addNewBook(value)
    }
    return(
        <section className="add-item">
            <form onSubmit={handleFormSubmit}>
                <h2>Add New Book</h2>
                <div className="text-field">
                <input type="text" name="title" value={inputTitle} onChange={e=>setInputTitle(e.target.value)} placeholder="Title"/>
                <input type="text" name="author" value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Author"/>
                <input type="text" name="price" value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price"/> 
                </div>
                <button type="submit" >Add Item</button>
            </form>  
        </section>
    )
}
export default AddItem;