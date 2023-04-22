import React,{Component} from 'react';

class Welcome extends Component{

    constructor(){
        super();
        this.state = {
            message:'Welcome Vistor'
        }
    }
    changeMessage(){
    this.setState(
        {message:'Thanks for subscribe'}
    )}

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Submit</button>
            </div>
        )
    }
}
export default Welcome;