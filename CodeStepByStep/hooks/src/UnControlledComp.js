import {useRef} from "react"

function UnControlledComp() {

    let inputRef1 = useRef(null)
    let inputRef2 = useRef(null)

    function getFormValue(event) {
        event.preventDefault()
        console.log(inputRef1.current.value);
        console.log(inputRef2.current.value);
        let input3 = document.getElementById("input3").value;
        console.log((input3));
    }

    return(
        <>
            <form onSubmit={getFormValue}>
                <input ref={inputRef1} type="text" />
                <input ref={inputRef2} type="text" />
                <input id="input3" type="text" />
                <button type="submit" >Submit</button>
            </form>
        </>
    )
}

export default UnControlledComp;