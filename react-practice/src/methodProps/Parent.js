import React,{Component} from "react";
import Child from "./Child";
import ChildComponent from "./ChildComponent";

class Parent extends Component{
    constructor(props){
        super(props);
        this.state={name:'Hello Parent'}
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(child){
        console.log("Parent");
        alert(`This is ${this.state.name} from ${child}`)
    }
    sendMessage(){
        alert('You recieved a new message')
    }
    
    render(){
        return(
            <div>
            <Child greetHandler={this.greetParent}></Child>
            <ChildComponent message={()=>this.sendMessage()}></ChildComponent>
            </div>
        )
    }
}

export default Parent;