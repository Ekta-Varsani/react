import {useState, useMemo} from "react";

function UseMemo() {

    const [count, setCount] = useState(1);
    const [item, setItem] = useState(10)

    const useMemoFun = useMemo(function countFun() {
        console.log("count updated!");
        return count*5;
    }, [count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Item: {item}</h1>
            <h1>{useMemoFun}</h1>
            <button onClick={() => setCount(count+1)}>Update Count</button>
            <button onClick={() => setItem(item * 5)}>Update Item</button>
        </div>
    )
}

export default UseMemo