import React,{Component} from "react";
import Input from "./Input";

class InputRef extends Component{
    constructor(props) {
      super(props)
      this.inputRef=React.createRef();
    }
    clickHanlder = ()=>{
       console.log(this.inputRef);
       this.inputRef.current.focusElement();
    }

    render(){
        return(
            <>
            <Input ref={this.inputRef}></Input>
            <button type='button' onClick={this.clickHanlder}>focus element</button>
            </>
        )
    }
}
export default InputRef;