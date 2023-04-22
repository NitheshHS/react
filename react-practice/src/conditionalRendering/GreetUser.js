import React,{Component} from "react";

class GreetUser extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false
        }
    }

    signIn(){
        this.setState({
            isLoggedIn:true
        })
    }

    render(){

        return this.state.isLoggedIn?
        <div>
            <h2>Welcome back, {this.props.username}</h2>
        </div>:
        <div>
            <h2>Hello Guest Please sign in</h2>
            <button onClick={()=>this.signIn()}>Sign In</button>
        </div>
        
        // if(this.state.isLoggedIn){
        //     return <div>Welcome back, Nithesh </div>
        // }else{
        //     return <div>Hello Guest Please sign in</div>
        // }

        // return(
        //     <div>
        //         Hello Nithesh
        //     </div>
        // )
    }
}

export default GreetUser;