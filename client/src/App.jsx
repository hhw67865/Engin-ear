import { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

function App() {

  const [tags, setTags] = useState([])
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
        // fetchPosts()
      })
      }
    })
  },[])

  useEffect(()=>{
    fetch("/tags")
    .then(r=>r.json())
    .then(setTags)
  },[])


  useEffect(()=>{
    fetch("/posts")
    .then(r=>r.json())
    .then(setPosts)
  }, [user])





  if (errors) return <h1>{errors}</h1>

	return (
		<div className="App">
			<NavBar user={user} setUser={setUser} />
			<Routes>
				<Route path="/login" element={<Login setUser={setUser} />} />
				<Route path="/signup" element={<Signup />} />
        
        {user?<Route path="/profile/:id" element={<Profile setUser={setUser} user={user} />} />:null}
				<Route path="/" element={<Home user={user} posts={posts} setPosts={setPosts} tags={tags}/>} setUser={setUser} />
			</Routes>
		</div>
	)
}

export default App
