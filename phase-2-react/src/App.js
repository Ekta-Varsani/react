import './App.css';
import { useState } from 'react';
import Country from './Country';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import User from './User';
import Login from './LogIn';
import NavBar from './NavBar';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function loginHandler(data) {
    setIsLoggedIn(data)
  }

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={< Login loginBool={loginHandler} />} />
          <Route path='/navbar' element={< NavBar isLoggedIn={isLoggedIn} />} >
            <Route path='country' element={<Country />} />
            <Route path='user' element={<User />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
