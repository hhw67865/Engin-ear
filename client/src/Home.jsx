import Post from "./Post"
import {useEffect, useState} from "react"

function Home({user, posts}) {



  // useEffect(()=>{
  //   fetch("/posts")
  //   .then(r=>r.json())
  //   .then(setPosts)
  // }, [])

  const postArray = posts.map((post,i)=><Post key={i} post={post} user={user}/>)


  return (
    <div>
      <select name="filter">
        <option value="job posts">Job Posts</option>
        <option value="inspiration">Inspiration</option>
        <option value="mood swings">Mood Swings</option>
        <option value="blogs">Blogs</option>
        <option value="projects">Projects</option>
      </select>
      <input type="checkbox" name="follow_filter" value="follow"/>
      {user ? <><label htmlFor="follow_filter">Only show people I follow</label><br/></> : null}


      {user ?
      <div>
        <h3>Create a Post!</h3>
        <form id="post_creation">
          <label htmlFor="title">Title</label> <br/>
          <input type="text" name="title"/><br/>
          <label htmlFor="picture">Picture Url</label><br/>
          <input type="text" name="picture"/>
          <textarea id="post_area" name="post_area" rows="4" cols="50" placeholder="What's on your mind?">
          </textarea>
          <input type="submit" value="Post"/>
        </form>
      </div> :
      <div>
      <h1> Login to create a post! </h1>
      </div>
      }
      
      <div id="post_feed">
        {postArray}
      </div>
    </div>
  )
}

export default Home