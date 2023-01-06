import Post from "./Post"

import {useState} from "react"

function Home({user, posts, setPosts, tags}) {
  // :title, :post_body, :user_id, :picture_url
  const [formData, setFormData] = useState({
    title: "",
    picture_url: "",
    post_body: ""
  })

  const [showFollow, setShowFollow] = useState(false)
  const [filter, setFilter] = useState("")
  const [tagData, setTagData] = useState("")
  const [tagData2, setTagData2] = useState("")
  const [emoji, setEmoji] = useState("")
  const [emoji2, setEmoji2] = useState("")

  const [errors, setErrors] = useState(null)


  function postChange (e) {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  
  function createPost (e) {
    e.preventDefault()
    if (tagData===tagData2 && tagData!="") {
      setErrors(["Cannot use two of the same tags"])
      return
    }
    const newPost = {...formData, user_id:user.id}
    fetch('/posts',{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newPost)
    })
    .then(r=>{
      if (r.ok) {
        r.json().then(newPost=>{                 
          if (tagData!=="") {
            fetch("/post_tags", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({tag_id:tagData, post_id:newPost.id, emoji:emoji})
            })
          }
          if (tagData2!=="") {
            setTimeout(()=>{
              fetch("/post_tags", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({tag_id:tagData2, post_id:newPost.id, emoji:emoji2})
              })
            },500)
          }          
        })
      }
      else {
        r.json().then((obj)=>{
          setErrors(obj.errors)
        })
      }
      
    })
    .then(()=>{
      setTimeout(()=>{
      fetch("/posts")
      .then(r=>r.json())
      .then((p)=>{       
        setPosts(p) 
        setFormData({
          title: "",
          picture_url: "",
          post_body: ""})
        setTagData("")
        setEmoji("")
        setTagData2("")
        setEmoji2("")
        setErrors(null)
      })},2000)
    })
  }

  const followedPost = posts.filter((post)=>{
    if (showFollow) {
      return user.following_id.includes(post.user.id)
    }
    else {
      return true
    }}
    )
 
  const filteredPosts = followedPost.filter((post)=>post.tags.filter((tag)=>tag.name.includes(filter)).length>0)

  const postArray = filteredPosts.map((post,i)=><Post key={i} post={post} user={user}/>)
  


  return (
    <div>
      <select name="filter" id="post-tag-dropdown" value={filter} onChange={e=>setFilter(e.target.value)}>
        <option value=""></option>
        <option value="job posts">Job Posts</option>
        <option value="inspiration">Inspiration</option>
        <option value="mood swings">Mood Swings</option>
        <option value="memes">Memes</option>
        <option value="blogs">Blogs</option>
        <option value="projects">Projects</option>
      </select>
      < br />
      {user ? 
        <div>
            <label id="filter-by-follow" htmlFor="follow_filter">
              <input id="filter-checkbox" type="checkbox" name="follow_filter" checked={showFollow} onChange={e=>setShowFollow(e.target.checked)}/>
            Only show people I follow</label>
            <br/> 
        </div> 
      : null}

      {user ?
      <div id="post-creation-div">
        <h2>Create a Post!</h2>
        <form id="post-creation-form" onSubmit={createPost}>
          <label htmlFor="title">Title</label> <br/>
          <input type="text" name="title" value={formData.title} onChange={postChange}/><br/>
          <label htmlFor="picture">Picture Url</label><br/>
          <input type="text" name="picture_url" value={formData.picture_url} onChange={postChange}/>
          <input type="text" name="emoji" placeholder="Give your tags an Emoji" value={emoji} onChange={(e)=>setEmoji(e.target.value)}/>
          <select name="filter" onChange={(e)=>{
            setTagData(e.target.value)
            
            }} value={tagData}>
            <option name="" value=""> </option>
            {tags.map((tag)=><option key={tag.id} name={tag.name} value={tag.id}>{tag.name}</option>)}
          </select>
          <input type="text" name="emoji" placeholder="Give your tags an Emoji" value={emoji2} onChange={(e)=>setEmoji2(e.target.value)}/>
          <select name="filter" onChange={(e)=>{
            setTagData2(e.target.value)
            
            }} value={tagData2}>
            <option name="" value=""> </option>
            {tags.map((tag)=><option key={tag.id} name={tag.name} value={tag.id}>{tag.name}</option>)}
          </select>
          <textarea id="post_body" name="post_body" rows="4" cols="50" placeholder="What's on your mind?" value={formData.post_body} onChange={postChange}>
          </textarea>
          <input id="submit-new-post" type="submit" value="Post!"/>
        </form>
        {errors ? errors.map((e,i)=><p style={{color:"red"}} key={i}>* {e} *</p>):null}
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