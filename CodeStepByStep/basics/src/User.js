// function User() {
//     return (
//       <div className="App">
//         <h1>User Component</h1>
//       </div>
//     );
//   }

//   export default User;

//class component--------------

import React, { Component } from "react";

export default class User extends Component {

  constructor() {
    super();
    this.state = {
      data:1
    }
  }

  increment() {
    this.setState({
      data: this.state.data + 1
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.increment()}>Update</button>
      </div>
    );
  }
}
