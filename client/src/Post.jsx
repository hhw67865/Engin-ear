import CommentContainer from "./CommentContainer"
import {useState, useEffect} from "react"

const Post = ({post,user}) => {


  
  const [comments, setComments] = useState([])
  const [hideComments, setHideComments] = useState(true)
  const [noUser, setNoUser] = useState(false)

  useEffect(()=>{
    setComments(post.comments)
  },[])


  function showComments () {
    if (user) {
    fetch(`/posts/${post.id}/comments`)
    .then(r=>r.json())
    .then(obj => {
      setComments(obj)
    })
    .then(()=>setHideComments(false))
    }
    else {
       setNoUser(true)
       setTimeout(()=>{setNoUser(false)},4000)
    }
  }

  return (
    <div className="postCard">
        <div className="user">
            <img className="profilePicture" src={post.user.profile_picture} alt={post.user.name}/>
            <h2> {post.user.name} </h2>
            <p> {post.user.follower_count} followers </p>
            <p>{post.created_at_ago}</p>
            <p> {post.title} </p>
        </div>
        <div className="post">
            <p> {post.post_body} </p>
            <img className="postPicture" src={post.picture_url} alt={post.title}/>
        </div>
        <div className="footer">
            {/* likes */}
            <p onClick={showComments}> {comments.length} Comments </p>
        </div>
        {hideComments ? null: <CommentContainer comments={comments} user={user} post={post} setComments={setComments}/> }
        {noUser?<p>Please Login To See Comments!</p>:null}
        

    </div>
  );
}
export default Post;