import {useState} from "react";

function HOC() {
    return(
        <div>
            <HOCRed cmp={Counter}/>
            <HOCGreen cmp={Counter} />
            <HOCBlue cmp={Counter} />
        </div>
    )
}

function HOCRed(props) {
    return (
        <div style={{backgroundColor: "red", width: 100}}>
            <Counter />
            <h1 >Red</h1>
        </div>
    )
}

function HOCGreen(props) {
    return (
        <div style={{backgroundColor: "green", width: 100}}>
            <Counter />
            <h1 >Red</h1>
        </div>
    )
}

function HOCBlue(props) {
    return (
        <div style={{backgroundColor: "blue", width: 100}}>
            <Counter />
            <h1 >Red</h1>
        </div>
    )
}

function Counter() {
    const [val, setVal] = useState(0)
    return(
        <div>
            <h1>{val}</h1>
            <button onClick={() => setVal(val+1)}>Update</button>
        </div>
    )
}

export default HOC;