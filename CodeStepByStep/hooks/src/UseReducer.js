import { useReducer } from "react";

function UseReducer() {

    const initialState = 0

    const reducer = (state, action) => {
        console.log(state, action);
        if(action.type === "increment") {
           return state += 1;
        }
        if(action.type === "decrement") {
           return state -= 1;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {state}<br />
            <button onClick={() => dispatch({type: "increment"})}>Inc</button><br />
            <button onClick={() => dispatch({type: "decrement"})}>Dec</button>
        </>
    )
}

export default UseReducer;