import './App.css';
import Country from './Country';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar';
import User from './User';
import Login from './Login';


function App() {
  return (
    <div className="">

      <Router>
        <NavBar />
        <Routes>
          {/* <Route path='/' element={< Login />} /> */}
          <Route path='/' element={<Country />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
