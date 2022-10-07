import "./App.css";
import { useState, useEffect } from "react";
import Style from "./Style";
import ArrayList from "./ArrayList";
import SendData from "./SendData";
import PureFunction from "./PureFunction";
import UseMemo from "./UseMemo";
import Ref from "./Ref";

function App() {
  const [count, setCount] = useState(10);
  const [data, setData] = useState(100);

  function alertParent(data) {
    alert(data)
  }

  return (
    <div className="App">
      <Ref />

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
