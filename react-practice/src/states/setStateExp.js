import React,{Component} from 'react';
/*
Synatx:
setState((previousState, props)=>({}), callBack function)
 */
class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    increment(){
        this.setState((previousState)=>({
          count: previousState.count+1 
        }), ()=>console.log(this.state.count))
    }

    decrement(){
        this.setState(previousState=>({
            count:previousState.count-1
        }), ()=>console.log(this.state.count))
    }

    reset(){
        this.setState({
            count:0
        }, ()=>console.log(this.state.count))
    }

    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.reset()}>Reset</button>
                <button onClick={()=>this.decrement()}>Decrement</button>
            </div>
        )
    }
}
export default Counter;