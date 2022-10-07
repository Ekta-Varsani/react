import "./Style.css"
import style from "./Custom.module.css"
import {Button} from "react-bootstrap"
import {Fragment} from "react"

function Style() {
    return (
        <Fragment>
            <h1 className="primary">Stylig in react!</h1>
            <h1 style={{backgroundColor: "pink", color: "green"}}>Stylig in react!</h1>
            <h1 className={style.success}>Stylig in react!</h1>
            <Button variant="light p-2">Click</Button>
        </Fragment>
    )
}

export default Style