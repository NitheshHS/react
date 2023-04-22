import React, {Component} from 'react';

//For class no need to send any props argument in render method
//so to call props use this.props in the jsx element
class Welcome extends Component{
    render(){
        return(
            <h1>Welcome {this.props.name}</h1>
        )
    }

}

export default Welcome