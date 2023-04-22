import React,{Component} from "react";

const WithCounter = (WrappedComponent)=>{
    
    class NewComponent extends Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incrementCounter = ()=>{
              this.setState(previousState=>{
                  return {count: previousState.count+1}
              })
          }
        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCounter}></WrappedComponent>
        }
    }
    return NewComponent
}
export default WithCounter