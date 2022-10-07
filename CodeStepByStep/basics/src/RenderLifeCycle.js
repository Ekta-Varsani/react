import { Component, useState } from "react";

class RenderLifeCycle extends Component{

    constructor() {
        super();
        this.state = {
            email: "evarsani@gmail.com"
        }
    }

    render() {
        console.log("render", this.state.email);
        return (
            <div>
                <h1>User</h1>
                <button onClick={() => {this.setState({email:"sjadav@gmail.com"})}}>Update</button>
            </div>
        )
    }
}

export default RenderLifeCycle;