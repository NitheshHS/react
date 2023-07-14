const Book = (props)=>{
    const {index, img, author, title, price, getBook, number}=props;
    return(
      <article className="book">
        <img src={img} alt={title}></img>
        <div className="text-block">
        <h2>{title}</h2>
        <h5>{author}</h5>
        <h5>${price}</h5>
        <button onClick={()=>getBook(index)}>click To get book details</button>
        <span className="number">#{number+1}</span>
        </div>
      </article>
    )
  }
  export default Book