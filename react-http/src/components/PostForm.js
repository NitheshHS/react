import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
export class PostForm extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      userId:'',
      title:'',
      body:''
   }
 }
 changeHandler = (e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
 }
 submitHandler= e=>{
    e.preventDefault()
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(res=>
        console.log(res))
    .catch(error=>{
        console.log(error);
    })
 }
  render() {
    const {userId, title, body}=this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <input type='text' 
            name='userId' 
            placeholder='user id' 
            value={userId} onChange={this.changeHandler}></input>
            <input type='text' 
            name='title' 
            placeholder='Title'
            value={title} onChange={this.changeHandler}></input>
            <input type='text' 
            name='body' 
            placeholder='body'
            value={body} onChange={this.changeHandler}></input>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm