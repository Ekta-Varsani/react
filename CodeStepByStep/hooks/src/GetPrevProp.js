import { useEffect, useRef } from "react"

function GetPrevProp(props) {
    let prevVal = useRef();
    useEffect(() => {
        prevVal.current = props.count;
    })

    return (
        <div>
            prev: {prevVal.current}<br></br>
            curr: {props.count}
        </div>
    )
}

export default GetPrevProp