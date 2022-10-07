import { Component, PureComponent } from "react";

class PureFunction extends PureComponent {
    constructor() {
        super();

        this.state = {
            count: 1
        }
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count+1})}>Update</button>
            </div>
        )
    }
}

export default PureFunction;