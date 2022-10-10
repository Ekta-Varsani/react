import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import DynamicRouting from './DynamicRouting';

function App() {

  let users = [
    {id: 1, name: "ekta", email: "ek@gmail.com", phone: 1254789},
    {id: 2, name: "ekta", email: "ek@gmail.com", phone: 1254789},
    {id: 3, name: "ekta", email: "ek@gmail.com", phone: 1254789},
    {id: 4, name: "ekta", email: "ek@gmail.com", phone: 1254789},

  ]

  return (
    <div className="App">
      <h1>Dynamic routing</h1>
      <Router>
      {
        users.map((item) => 
          <div><Link to={"/user/"+item.id}>
            <h4>{item.name}</h4>
          </Link></div>
        )
      }
        {/* <Routes> */}
          <Route path='/user/:id' ><DynamicRouting /></Route>
        {/* </Routes> */}
      </Router>
      

      {/* <NavBar />
        <Routes>  
          <Route index path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes> */}
    </div>
  );
}




export default App;
