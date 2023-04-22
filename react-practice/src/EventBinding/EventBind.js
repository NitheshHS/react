import React, {Component} from "react";

class EventBind extends Component{

    constructor(props){
        super(props);
        this.state = {name: 'User!'}
    }

    // clickHandler=()=>{
    //     this.setState({name:'Nithesh'})
    // }
    clickHandler(){
        this.setState({name:'Nithesh Gowda'})
    }
    

    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
                {/* <button onClick={this.clickHandler}>Click me</button> */}
                <button onClick={()=>this.clickHandler()}>Click me</button>
            </div>
        )
    }
}
export default EventBind;