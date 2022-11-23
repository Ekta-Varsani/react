import './App.css';
import User from './User';
import {Component, useState} from "react";
import Props from './Props';
import GetInputeValue from './GetInputValue';
import HideShow from './HideShow';
import Form from './Form';
import ConstructorLifeCycle from './ConstructorLifeCycle';
import RenderLifeCycle from './RenderLifeCycle';
import DidMount from './DidMount';

class App extends Component {

  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  // const [name, setName] = useState("Ekta")

  // function updateData() {
  //   console.log("sahaj");
  //   setName(name + " Varsani")
  // }

  // function hideShow() {
  //   alert("welcomee..")
  // }

  render() {
    return (
      <div>
        <RenderLifeCycle  />
        {/* {
          this.state.show ? <HideShow /> : <h2>Removed!</h2>
        }
        <button onClick={() => this.setState({show: !this.state.show})}>Toggle</button> */}
      </div>
    )
  }

  // return (
  //   <div className="App">
  //     {/* <DidMount /> */}
  //     {/* <RenderLifeCycle  /> */}
  //     {/* <ConstructorLifeCycle data={name} /> */}
  //     {/* <Form /> */}
  //     <HideShow data={hideShow} />
  //     {/* <GetInputeValue>
  //       <h1>it is workingg</h1>
  //     </GetInputeValue> */}
  //     {/* <Props name={name}/>
  //     <Props name={name}/>
  //     <Props name={name} fun={updateData}/>
  //     <button onClick={updateData}>Update</button>
  //     <User /> */}
  //   </div>
  // );
}

export default App;
