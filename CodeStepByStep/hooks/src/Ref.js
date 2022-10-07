import { Component, createRef } from "react";

class Ref extends Component {

    constructor() {
        super();
        this.inputRef = createRef()
    }

    componentDidMount() {
        console.log(this.inputRef);
    }

    getValue() {
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color = "blue"
        this.inputRef.current.style.backgroundColor = "pink"
        this.inputRef.current.style.border = "1px solid green"
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.getValue()}>Click</button>
            </div>
        )
    }
}

export default Ref;