import {useRef} from "react"

function Useref() {

    let inputRef = useRef(null);

    function getValue() {
        console.log(inputRef);
        inputRef.current.value = "ekta"
        inputRef.current.focus()
    }

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={getValue}>Get value</button>
        </div>
    )
}

export default Useref;