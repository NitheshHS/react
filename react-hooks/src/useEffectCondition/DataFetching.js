import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data);
            setPosts([res.data])
        })
        .catch(error=> console.log(error))
    },[])

  return (
    
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                   {posts.map(post=>(
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                   ))}
            </tbody>
        </table>
    </div>
  )
}

export default DataFetching