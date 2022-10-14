function Login() {

    return (
        <>
            <div className="container mt-3">
                <div className="row mb-3">Login</div>
                <div className="row mb-3">
                    <input type="text" placeholder="enter username" className="form-control" />
                </div>
                <div className="row mb-3">
                    <input type="password" placeholder="enter password" className="form-control" />
                </div>
                <div className="row">
                    <button className="btn btn-outline-primary">Login</button>
                </div>
            </div>
        </>
    )
}

export default Login