import {useState, useEffect} from "react"

function PostApi() {

    const [UserName, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setNumber] = useState("")

    function getValue() {
        let data = {UserName, Email, PhoneNumber}
        fetch("http://192.168.0.73:4000/api/user/addUser", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(result => {
            console.log(result);
        })
    }

    return(
        <div>
            <input value={UserName} type="text" onChange={(e) => setName(e.target.value)} /><br></br><br></br>
            <input value={Email} type="email" onChange={(e) => setEmail(e.target.value)}/><br></br><br></br>
            <input value={PhoneNumber} type="number" onChange={(e) => setNumber(e.target.value)}/><br></br><br></br>
            <button type="submit" onClick={getValue}>Add</button>
        </div>
    )
}

export default PostApi