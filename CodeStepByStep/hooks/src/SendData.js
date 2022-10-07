function SendData(props) {

    const name = "ekta"

    return (
        <div>
            <h1>Child component</h1>
            <button onClick={() => props.alert(name)}>Click</button>
        </div>
    )
}

export default SendData;