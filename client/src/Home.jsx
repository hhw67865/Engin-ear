import Post from "./Post"

import {useState} from "react"

function Home({user, posts, setPosts, tags}) {
  // :title, :post_body, :user_id, :picture_url
  const [formData, setFormData] = useState({
    title: "",
    picture_url: "",
    post_body: ""
  })

  const [tagData, setTagData] = useState("")
  const [tagName, setTagName] = useState("")
  const [emoji, setEmoji] = useState("")

  const [errors, setErrors] = useState(null)

  function postChange (e) {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  
  function createPost (e) {
    e.preventDefault()
    const newPost = {...formData, user_id:user.id}
    fetch('/posts',{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newPost)
    })
    .then(r=>{
      if (r.ok) {
        r.json().then(newPost=>{                 
          if (tagData) {
            fetch("/post_tags", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({tag_id:tagData, post_id:newPost.id, emoji:emoji})
            })
          }
          
          
          
          setPosts(prev=>[newPost,...prev])
                  
          
        })
      }
      else {
        r.json().then((obj)=>{
          setErrors(obj.errors)
        })
      }
    })
  }


  const postArray = posts.map((post,i)=><Post key={i} post={post} user={user}/>)
  


  return (
    <div>
      <select name="filter">
        <option value="job posts">Job Posts</option>
        <option value="inspiration">Inspiration</option>
        <option value="mood swings">Mood Swings</option>
        <option value="memes">Memes</option>
        <option value="blogs">Blogs</option>
        <option value="projects">Projects</option>
      </select>
      <input type="checkbox" name="follow_filter" value="follow"/>
      {user ? <><label htmlFor="follow_filter">Only show people I follow</label><br/></> : null}


      {user ?
      <div>
        <h3>Create a Post!</h3>
        <form id="post_creation" onSubmit={createPost}>
          <label htmlFor="title">Title</label> <br/>
          <input type="text" name="title" value={formData.title} onChange={postChange}/><br/>
          <label htmlFor="picture">Picture Url</label><br/>
          <input type="text" name="picture_url" value={formData.picture_url} onChange={postChange}/>
          <input type="text" name="emoji" placeholder="Give your tags an Emoji" value={emoji} onChange={(e)=>setEmoji(e.target.value)}/>
          <select name="filter" onChange={(e)=>{
            setTagData(e.target.value)
            setTagName(e.target.name)
            }}>
            <option name="" value=""> </option>
            {tags.map((tag)=><option key={tag.id} name={tag.name} value={tag.id}>{tag.name}</option>)}
          </select>
          <textarea id="post_body" name="post_body" rows="4" cols="50" placeholder="What's on your mind?" value={formData.post_body} onChange={postChange}>
          </textarea>
          <input type="submit" value="Post"/>
        </form>
        {errors ? errors.map((e,i)=><p key={i}>{e}</p>):null}
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