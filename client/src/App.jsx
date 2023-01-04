import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [errors, setErrors] = useState([])

  function loginUser(someNewLoginData) {
    fetch (`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(someNewLoginData)
    })
     .then(response => {
      if(response.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          // history.push(`/users/${user.id}`)
        })
      } else {
        res.json().then(json => setErrors(json.errors))
      }
     })
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
