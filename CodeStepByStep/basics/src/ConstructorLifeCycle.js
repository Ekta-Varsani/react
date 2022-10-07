import { Component } from "react";

export default class ConstructorLifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log("constructor");
        console.log(this.props.data);
    }
    
    render(){
        console.log("render");
        return (
            <div>

            </div>
        )
    }
}