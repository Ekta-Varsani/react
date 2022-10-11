import "./App.css";
import { useState, useEffect, useRef } from "react";
import Style from "./Style";
import ArrayList from "./ArrayList";
import SendData from "./SendData";
import PureFunction from "./PureFunction";
import UseMemo from "./UseMemo";
import Ref from "./Ref";
import Useref from "./UseRef";
import ForwardRef from "./ForwardRef";
import ControlledComp from "./ControlledComp";
import UnControlledComp from "./UnControlledComp";
import HOC from "./HOC";
import GetPrevProp from "./GetPrevProp";

function App() {
  const [count, setCount] = useState(10);
  const [data, setData] = useState(100);

  function alertParent(data) {
    alert(data)
  }

  let inputRef = useRef(null)

  function forwardReff() {
      inputRef.current.value = "ekta"
  }

  return (
    <div className="App">
      <GetPrevProp  count={count}/>
      <button onClick={() => setCount(Math.floor(Math.random() * 10))}>Update</button>

      {/* <HOC /> */}
      {/* <UnControlledComp /> */}
      {/* <ControlledComp /> */}
      {/* <ForwardRef ref={inputRef}/>
      <button onClick={forwardReff}>Update</button> */}
      {/* <Useref /> */}
      {/* <Ref /> */}
      {/* <UseMemo /> */}
      {/* <PureFunction /> */}
      {/* <SendData alert={alertParent}></SendData> */}
      {/* <ArrayList /> */}
      {/* <Style /> */}
      {/* <h1>count: {count}</h1>
       <h1>data: {data}</h1>
       <button onClick={() => setCount(count + 1)}>Update Count</button>
       <button onClick={() => setData(data + 1)}>Update data</button> */}
    </div>
  );
}

export default App;
