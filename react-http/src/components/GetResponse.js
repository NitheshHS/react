import React, { Component } from 'react'
import axios from 'axios'
import './style.css';

class GetResponse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorTxt:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response);
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
  render() {
    const {posts}=this.state;
    return (
      <div>
        {posts.length>0?
        <table>
            <thead>
                <tr>
                <th>User Id</th>
                <th>Title</th>
                <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post=>{
                    return(
                    <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    </tr>)
                })}
            </tbody>
        </table>: 
        <h2>Something went wrong</h2>
        }
      </div>
    )
  }
}

export default GetResponse