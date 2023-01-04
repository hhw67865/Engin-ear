import { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

function App() {

	const [user, setUser] = useState(null)
	const [errors, setErrors] = useState(false)
  	const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch("/authorized")
    .then(res => {
      if(res.ok){
       res.json()
       .then(user => {
        setUser(user)
        fetchPosts()
      })
      }
    })
  },[])

  const fetchPosts = () => {
    fetch("/posts")
    .then(res => {
      if(res.ok){
        res.json()
        .then(setPosts)
      } else {
        res.json()
        .then(data => setErrors(data.errors))
      }
    })
  }

  if (errors) return <h1>{errors}</h1>

	return (
		<div className="App">
			<NavBar user={user} setUser={setUser} />
			<Routes>
				<Route path="/login" element={<Login setUser={setUser} />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/profile" element={<Profile setUser={setUser} />} />
				<Route path="/" element={<Home />} setUser={setUser} />
			</Routes>
		</div>
	)
}

export default App
