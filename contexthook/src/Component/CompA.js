import { createContext } from "react";
import CompB from "./CompB";

let Data = createContext()

function CompA() {
    let name = "ekta"
    let obj = {city: "rajkot"}
    return(
        <>
            <Data.Provider value={name}>
            <CompB />
            </Data.Provider>
        </>
    )
}

export default CompA;
export {Data}