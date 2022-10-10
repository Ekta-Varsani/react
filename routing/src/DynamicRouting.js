import {withRouter} from "react-router-dom"

function DynamicRouting(props) {
    console.log(props.match.params.id);
    return(
        <div>
            <h1>Dynamic</h1>
        </div>
    )
}

export default withRouter(DynamicRouting);