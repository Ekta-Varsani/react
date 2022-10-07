import { Component, useState } from "react";
import Props from "./Props";

// function HideShow(props) {

//     const [status, setStatus] = useState(true)

//     return (
//         <div>
//             {
//                 status? <h1>It's working.!</h1> : null
//             }
//             <button onClick={() => setStatus(!status)}>Toggle</button>
//             {/* <button onClick={() => setStatus(true)}>Show</button> */}
//             <button onClick={props.data}>Click</button>
//             <Props data={props.data}></Props>
//         </div>
//     )
// }


class HideShow extends Component {

    componentWillUnmount() {
        alert("componentWillUnmount")
    }

    render() {
        return (
            <div>
                <h1>Wornikg..</h1>
            </div>
        )
    }
    
}

export default HideShow;