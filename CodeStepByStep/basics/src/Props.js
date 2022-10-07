function Props(props) {
    return (
        <div style={{backgroundColor: "pink", margin: 12, padding: 8, color: "white"}}>
            <h2>Hello {props.name}</h2>
            <button onClick={props.data}>Grand Child</button>
        </div>
    )
}

// import { Component } from "react";

// class Props extends Component {
    
//     render() {
//         console.log(this.props);
//         return (
//             <div style={{backgroundColor: "pink", margin: 12, padding: 8, color: "white"}}>
//                 <h2>Hello {this.props.name}</h2>
//                 {/* <button onClick={() => this.props.fun()}>Click</button> */}
//             </div>
//         )
//     }
// }

export default Props;