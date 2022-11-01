import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LogIn(props) {

    const [loginInfo, setLoginInfo] = useState({
        UserName: "",
        Password: ""
    })
    const navigate = useNavigate();
    let loginBool = false;

    function onChangeHandler(event) {
        setLoginInfo({
            ...loginInfo,
            [event.target.name]: event.target.value
        })
    }

    async function inputHandler() {
        loginBool = true
        const response = await fetch(`http://192.168.0.10:4000/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginInfo)
        })

        let token = await response.json()
        console.log(token);

        if(response.status == 200) {
            localStorage.setItem('token', token.token)
            navigate("/navbar");
        }
        else{
            console.log("Invalid user");
        }


        // fetch("http://192.168.0.10:4000/api/login", {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify(loginInfo)
        // }).then(async (result) => {
        //     if(result.status == 200) {
        //         console.log(await result.json().token);
        //         let token = await result.json()
        //         localStorage.setItem('token', token.token)
        //         navigate("/navbar");
        //     }
        //     else{
        //         alert("Invalid details")
        //     }
        // }).catch((error) => {
        //     console.log(error);
        // })
    }

    return (
        <>
            <div className="container justify-content-center mt-3">
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                        <div className="row mb-3 text-dark justify-content-center">Login</div>
                        <div className="row mb-3">
                            <input value={loginInfo.UserName} type="text" name="UserName" placeholder="enter username" className="form-control" onChange={onChangeHandler} />
                        </div>
                        <div className="row mb-3">
                            <input value={loginInfo.Password} type="password" name="Password" placeholder="enter password" className="form-control" onChange={onChangeHandler} />
                        </div>
                        <div className="row">
                            <button className="btn btn-outline-primary" onClick={() => { inputHandler(); props.loginBool(loginBool) }}>Login</button>
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>

            </div>
        </>
    )
}

export default LogIn