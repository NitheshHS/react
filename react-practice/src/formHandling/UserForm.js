import React,{Component} from "react";
import './user.css'

class UserForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:''
        }
    }
    usernameHandler = event =>{
        event.preventDefault()
        this.setState({
            username:event.target.value
        })
    }
    emailHandler = event =>{
        event.preventDefault()
        this.setState({
            email:event.target.value
        })
    }
    commentsHandler = event=>{
        event.preventDefault()
        this.setState({
            comments:event.target.value
        })
    }
    submitForm = event =>{
        event.preventDefault()
        if(this.state.username!='' && this.state.email!=''){alert(`Thanks for the feedback ${this.state.username} We will send status to ${this.state.email}`)}
        else{
            alert("Please enter username and email")
        }
    }
    render(){
        return(
            <div className="group">
            <form onSubmit={this.submitForm} className="form">
                <div className="user-input text">
                    <label for="username" >Username: </label>
                    <input type="text" id="username" value={this.state.username} onChange={this.usernameHandler}></input>
                </div>
                <div className="user-input text">
                    <label for="email" >Email: </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.emailHandler}></input>
                </div>
                <div className="user-input text">
                    <label for="textArea" >comments: </label>
                    <textarea type="text" id="textArea" value={this.state.comments} onChange={this.commentsHandler}></textarea>
                </div>
                <button type="submit">Submit Form</button>
            </form>
            </div>
        )
    }
}
export default UserForm