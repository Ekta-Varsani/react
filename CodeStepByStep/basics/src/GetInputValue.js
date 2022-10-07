import { useState } from "react";

function GetInputeValue(props) {
    
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

  function getData(event) {
    setData(event.target.value)
  }

  return (
    <div>
        {props.children}
      <h2>{data}</h2>
      <input type="text" onChange={getData} />
      <button onClick={() => {setPrint(true)}}>Get Value</button>
      <h3>
        {
            print? data: null
        }
      </h3>
    </div>
  );
}

export default GetInputeValue;
