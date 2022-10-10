import {Component, useState} from "react";

function ControlledComp() {
    const [val, setVal] = useState("")

    return(
        <div>
            <input value={val} onChange={(e) => setVal(e.target.value)} type="text" />
            <h1>{val}</h1>
        </div>
    )
}

// class ControlledComp extends Component {

//     constructor() {
//         super();
//         this.state = {
//             name: "fdgb"
//         }
//     }
//     render() {

//         return(
//             <div>
//                 <input value={this.state.name} onChange={(e) => this.setState({name: this.state.name})} type="text" />
//                 <h1>{this.state.name}</h1>
//             </div>
//         )
//     }
// }

export default ControlledComp;