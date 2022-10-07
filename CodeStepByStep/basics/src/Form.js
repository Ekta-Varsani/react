import { useState } from "react";

function Form() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [option, setOption] = useState("")

    function getFormValue(event) {
        console.log(name, tnc, option);
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={getFormValue}>
                <h1></h1>
                <input type="text" placeholser="Enter name" onChange={(event) => setName(event.target.value)} /> <br /><br />
                <select onChange={(event) => {setOption(event.target.value)}}>
                    <option>Selecet option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br /><br />
                <input type="checkbox" onChange={(event) => {setTnc(event.target.checked)}}/><span>Accept terms and conditions.</span><br /><br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form;