import { Component } from "react";

class DidMount extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        // console.log("    DidMount");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate", this.state.count);
        if(this.state.count >5) {
            return true;
        }
    }

    componentDidUpdate(preProps, preState, snapshot) {
        console.log("componentDidUpdate", preState);
    }

    render() {
        // console.log("render");
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Name</button>
            </div>
        )
    }
}

export default DidMount;